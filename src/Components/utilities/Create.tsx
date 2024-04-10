import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { nanoid } from "nanoid";
import { useState } from "react";
import Loader from "./Loader";

interface CreateInterface {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  handleTotal: () => void;
}

function Create({ isLoading, setIsLoading, handleTotal }: CreateInterface) {
  const [inputError, setInputError] = useState("");
  const [input, setInput] = useState("");
  const [linkName, setLinkName] = useState("");
  const [alias, setAlias] = useState("");
  const [shortLink, setShortLink] = useState("");
  const [nameError, setNameError] = useState("");
  const [aliasError, setAliasError] = useState("");
  const [qrCodeData, setQrCodeData] = useState("");
  const user = auth.currentUser;
  const userId = user?.uid;
  const userDocRef = userId
    ? collection(db, "user-collection", userId, "slug")
    : "";

  const colRefs = collection(db, "urls");

  const handleLinkName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameOfLink = e.target.value;
    if (!nameOfLink) {
      setNameError("Name is required");
    } else {
      setLinkName(nameOfLink.trim());
    }
  };

  const handleAlias = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const linkAlias = e.target.value;
    if (colRefs && linkAlias) {
      try {
        let aliasAvailable = true;

        getDocs(colRefs).then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const { slug } = doc.data();
            if (slug === linkAlias) {
              aliasAvailable = false;
            }
          });

          if (aliasAvailable) {
            setAliasError("Alias is available");
          } else {
            setAliasError("Alias already exists");
          }
        });
      } catch (error) {
        console.log(error);
      }
    } else if (!linkAlias) {
      setAliasError("");
    }
    setAlias(linkAlias.trim());
  };

  const generateQrCode = async (url: string) => {
    try {
      const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
        url
      )}&color=0065FE&bgcolor=37323e&margin=10`;
      const res = await fetch(apiUrl);
      return res.url;
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setInput(url.trim());
    setInputError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const slug = nanoid(5); // generates a random 5 character string
    if (!user) {
      if (input.startsWith("https://") || input.startsWith("http://")) {
        setIsLoading(true);
        try {
          const docRef = doc(colRefs, slug); // Create a DocumentReference using the slug as the document ID
          await setDoc(docRef, {
            url: input,
            slug: slug,
          });
          setShortLink(`${window.location.origin}/${slug}`);
          setIsLoading(false);
          setInput("");
          //console.log(input);
        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      } else if (!input) {
        setInputError("Link is required");
      } else setInputError("Please enter a valid link");
    } else if (user && userId) {
      if (input && linkName) {
        setIsLoading(true);
        const docId = nanoid(15);
        const docRef = doc(colRefs, docId); // Create a DocumentReference using the docId as the document ID
        if (!alias || alias.trim() === "") {
          const qrCodeDataUrl = await generateQrCode(
            `${window.location.origin}/${slug}`
          );
          try {
            await setDoc(docRef, {
              linkName: linkName,
              qrCodeData: qrCodeDataUrl,
              shortLink: `${window.location.origin}/${slug}`,
              slug: slug,
              timesClicked: 0,
              url: input,
            });
          } catch (error) {
            console.log(error);
          }

          if (userDocRef) {
            const DocRef = doc(userDocRef, docId);
            try {
              await setDoc(DocRef, {
                linkName: linkName,
                qrCodeData: qrCodeDataUrl,
                shortLink: `${window.location.origin}/${slug}`,
                slug: slug,
                timesClicked: 0,
                url: input,
              });
              setShortLink(`${window.location.origin}/${slug}`);
              if (qrCodeDataUrl) {
                setQrCodeData(qrCodeDataUrl);
              }
              setIsLoading(false);
              setInput("");
              setAlias("");
              setLinkName("");
            } catch (error) {
              console.log(error);
              setIsLoading(false);
            }
          }
        } else if (alias) {
          const qrCodeDataUrl = await generateQrCode(
            `${window.location.origin}/${alias}`
          );
          try {
            await setDoc(docRef, {
              linkName: linkName,
              qrCodeData: qrCodeDataUrl,
              shortLink: `${window.location.origin}/${alias}`,
              slug: alias,
              timesClicked: 0,
              url: input,
            });
          } catch (error) {
            console.log(error);
          }

          if (userDocRef) {
            const DocRef = doc(userDocRef, docId);
            try {
              await setDoc(DocRef, {
                linkName: linkName,
                qrCodeData: qrCodeDataUrl,
                shortLink: `${window.location.origin}/${alias}`,
                slug: alias,
                timesClicked: 0,
                url: input,
              });
              setShortLink(`${window.location.origin}/${alias}`);
              if (qrCodeDataUrl) {
                setQrCodeData(qrCodeDataUrl);
              }
              setIsLoading(false);
              setInput("");
              setAlias("");
              setLinkName("");
            } catch (error) {
              console.log(error);
              setIsLoading(false);
            }
          }
        }
        handleTotal();
      } else {
        setInputError("Link is required");
        setNameError("Name is required");
      }
    }
  };

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(shortLink);
      alert("Link copied to clipboard");
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="basis-[100%] md:basis-[84%] w-full md:pl-6 pl-4 pt-10 pr-7 md:pr-0"
      >
        <h2 className="text-3xl font-bold pb-4">Create link</h2>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xl font-bold">URL Destination</label>
            <input
              type="url"
              name="url"
              id="url"
              value={input}
              onChange={handleInputChange}
              className="border focus:outline-1 focus:outline-navBlack px-2 py-[2px] rounded-[4px]"
            />
            {inputError ? (
              <p className="text-red-600 font-light text-xs">{inputError}</p>
            ) : (
              <span className="text-linkGray text-sm">
                You can create more than 10 links per month
              </span>
            )}
            <span className="text-linkGray text-sm"></span>
          </div>
          <div className="flex w-full md:gap-x-7 gap-y-6 md:gap-y-0 flex-col md:flex-row">
            <div className="flex flex-col gap-2 basis-[50%] w-full">
              <label className="text-xl font-bold">Name of URL</label>
              <input
                type="text"
                id="name"
                onChange={handleLinkName}
                name="name"
                value={linkName}
                className="border focus:outline-navBlack px-2 py-[2px] rounded-[4px]"
              />
              {nameError && (
                <p className="text-red-600 font-light text-xs">{nameError}</p>
              )}
            </div>
            <div className="flex flex-col gap-2 basis-[50%] w-full">
              <label className="text-xl font-bold">Alias of URL</label>
              <input
                type="text"
                id="alias"
                onChange={handleAlias}
                value={alias}
                className="border focus:outline-navBlack px-2 py-[2px] rounded-[4px]"
              />
              {aliasError && (
                <p
                  className={`${
                    aliasError === "Alias already exists"
                      ? "text-red-600 font-light text-xs"
                      : "text-green-600 font-thin text-xs"
                  }`}
                >
                  {aliasError}
                </p>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-end pt-12">
            <button
              type="submit"
              className="bg-blue text-white px-4 py-2.5 rounded-lg"
            >
              Create Link
            </button>
          </div>
        </div>
      </form>
      {shortLink ? (
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mt-5">
            <a
              href={shortLink}
              className="p-3 hover:text-accent bg-shadow rounded-lg mr-3 shadow-sm shadow-accent"
              target="_blank"
              rel="noreferrer"
            >
              {shortLink ? shortLink : ""}
            </a>
            <button
              onClick={handleCopy}
              className="rounded-lg bg-accent font-bold text-background p-3 border border-accent hover:bg-transparent hover:text-accent transition-all active:translate-y-1"
            >
              Copy
            </button>
          </div>
          {qrCodeData ? (
            <img src={qrCodeData} alt="qr code" className="mt-5 w-44 h-44" />
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Create;
