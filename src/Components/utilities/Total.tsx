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

interface UserLinks {
  id: string;
  url: string;
  shortLink: string;
  qrCodeData: string;
  timesClicked: number;
  editUrls: boolean;
  linkName: string;
}

function Total() {
  const [arr, setArr] = useState<UserLinks[]>([]);

  const user = auth.currentUser;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
                    setArr(urls);
                  }
                });
              }
            })
            .catch((error: unknown) => {
              console.log(error);
            });
        }
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
    toast.success("Link Deleted")
    location.reload()
  };
  console.log(arr);

  return (
    <div className="pl-12">
      <h3 className=" text-blue text-3xl font-semibold pb-5">
        Your Shortened Links
      </h3>
      <div className="grid grid-cols-3 gap-6">
        {arr.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border-2 rounded-md border-blue py-4 px-3"
          >
            <div className="w-[180px]">
              <img src={item.qrCodeData} alt="" />
            </div>
            <div className="pt-2">
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
                <i className="fas fa-edit cursor-pointer"></i>
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
