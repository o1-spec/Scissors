import { useEffect, useState } from "react";
import { auth, db } from "../../config/firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import { Excerpts } from "./Excerpts";
import { toast } from "react-toastify";
import Loader from "./Loader";

interface UserLinks {
  id: string;
  url: string;
  shortLink: string;
  qrCodeData: string;
  timesClicked: number;
  editUrls: boolean;
  linkName: string;
}

interface handlePage {
  handlePage: () => void;
}

function Total({ handlePage }: handlePage) {
  const [arr, setArr] = useState<UserLinks[]>([]);
  const [loading, setLoading] = useState(true);
  const user = auth.currentUser;

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      try {
        setLoading(true);
        if (user) {
          const userId = user.uid;
          const userDocRef = userId
            ? collection(db, "user-collection", userId, "slug")
            : "";
          if (userDocRef) {
            getDocs(userDocRef)
              .then((querySnapshot) => {
                if (!querySnapshot.empty) {
                  const promises = querySnapshot.docs.map(async (document) => {
                    const colRef = doc(db, "urls", document.id);
                    const colDocSnapshot = await getDoc(colRef);
                    const timesClicked = colDocSnapshot.data()?.timesClicked;

                    if (timesClicked !== undefined) {
                      await updateDoc(document.ref, { timesClicked });
                    }
                  });

                  Promise.all(promises).then(() => {
                    if (querySnapshot) {
                      const urls: UserLinks[] = [];
                      querySnapshot.docs.forEach((doc) => {
                        const {
                          url,
                          shortLink,
                          qrCodeData,
                          timesClicked,
                          linkName,
                        } = doc.data();
                        urls.push({
                          ...doc.data(),
                          id: doc.id,
                          url,
                          shortLink,
                          qrCodeData,
                          timesClicked,
                          linkName,
                          editUrls: false,
                        });
                      });
                      setLoading(true);
                      setArr(urls);
                    }
                    setLoading(false);
                  });
                }
              })
              .catch((error: unknown) => {
                console.log(error);
              });
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    });
  }, []);

  const handleDeleteUrls = async (id: string) => {
    const colRef = doc(db, "urls", id);
    const docRef = user?.uid
      ? doc(db, "user-collection", user?.uid, "slug", id)
      : null;
    if (colRef) {
      await deleteDoc(colRef);
    }
    if (docRef) {
      await deleteDoc(docRef);
    }
    setArr((prevArr) => {
      return prevArr.map((item) => {
        if (item.id === id) {
          return {
            ...item,
          };
        }
        console.log(item.id);
        return item;
      });
    });
    toast.success("Link Deleted");
    location.reload();
  };
  //console.log(arr);

  if (loading) {
    return (
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  console.log(arr);
  return (
    <div className="md:pl-12 pl-4 w-full pr-4 md:pr-0">
      <h3 className=" text-blue text-3xl font-semibold pb-5 md:pt-0 pt-12">
        Your Shortened Links
      </h3>
      {arr.length === 0 && (
        <div className="flex items-center justify-center mt-6">
          <div className="flex flex-col gap-2 justify-center items-center bg-blue text-white px-10 py-6 rounded-md">
            <p className="text-lg text-center">
              You have not created any link yet. If you have please wait for
              2sec ☺️. Thank you
            </p>
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                handlePage();
              }}
              className="bg-white text-blue rounded-md px-3 py-1.5"
            >
              Create
            </Link>
          </div>
        </div>
      )}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 grid-cols-1">
        {arr.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border-2 rounded-md border-blue py-4 px-3 w-[300px] lg:w-fit"
          >
            <div className="w-[180px]">
              <img src={item.qrCodeData} alt="" />
            </div>
            <div className="pt-2">
              <div className="flex items-center justify-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                  />
                </svg>

                <span> {item.timesClicked}</span>
              </div>
              <h2 className="text-center font-semibold">{item.linkName}</h2>
              <div>
                <span>Short URL:</span>
                <Link to={item.shortLink}>
                  &nbsp;{Excerpts(item.shortLink, 20)}
                </Link>
              </div>
              <div>
                <span>Long URL:</span>
                <Link to={item.url}>&nbsp;{Excerpts(item.url, 20)}</Link>
              </div>
            </div>
            <div className="flex gap-2 justify-between items-center pt-4 w-full">
              <div className="border-2 border-blue px-1 rounded-lg">
                <img src="./images/Vector (4).svg" alt="scissors-icon" className="h-4 w-4"/>
              </div>
              <div className="border-2 border-blue px-1 rounded-lg">
                <i
                  className="fa fa-trash cursor-pointer"
                  aria-hidden="true"
                  onClick={() => handleDeleteUrls(item.id)}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Total;
