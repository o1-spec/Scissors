import { Link } from "react-router-dom";
import { useState } from "react";
import Create from "./Create";
import Total from "./Total";
import Account from "./Account";
import Loader from "./Loader";

export interface TrimSection {
  logout: boolean;
  setLogout: (value: boolean) => void;
  handleLogout: () => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

function TrimSection({
  logout,
  setLogout,
  handleLogout,
  isLoading,
  setIsLoading,
}: TrimSection) {
  const [page, setPage] = useState(true);
  const [account, setAccount] = useState(false);
  const [total, setTotal] = useState(false);
  const [create, setCreate] = useState(false);

  const handleAccount = () => {
    setPage(false);
    setAccount(true);
    setTotal(false);
  };

  const handleTotal = () => {
    setPage(false);
    setAccount(false);
    setTotal(true);
  };

  const handlePage = () => {
    setPage(true);
    setAccount(false);
    setTotal(false);
  };

  if (isLoading) {
    return (
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="pt-8 md:pt-16 md:px-8 lg:px-16 bg-no-repeat">
      {create && (
        <div className="overlay-link" onClick={() => setCreate(false)}></div>
      )}
      <div className="flex h-full">
        <div
          className="flex items-center gap-2 absolute left-5 top-24 md:hidden"
          onClick={() => setCreate(true)}
        >
          <img
            src="./images/icons8-menu-bar (1).svg"
            className="w-7 cursor-pointer"
            alt=""
          />
        </div>
        <div
          className={
            !create
              ? "flex flex-col gap-16 basis-[16%] transition-all duration-500 md:translate-x-0 -translate-x-[100%] z-20 max-h-[60vh] md:min-h-[100vh] md:border-r md:border-t pt-24 md:pt-8 pr-4 pl-8 top-0 md:pr-6 left-0 bottom-0 h-full md:w-fit w-[50vw] border-r-navBlack absolute md:relative bg-white"
              : "flex flex-col gap-16 basis-[16%] transition-all duration-500 md:translate-x-0 min-h-[60vh] md:border-r z-20  md:min-h-[100vh] md:border-t pt-24 md:pt-8 pr-4 pl-8 top-0 left-0 bottom-0 h-full md:pr-6 w-[50vw] border-r-navBlack absolute bg-white"
          }
        >
          <div className="flex gap-2">
            <img src="./images/Link.svg" alt="Link" className="w-7" />
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                handlePage();
                setCreate(false);
              }}
              className="text-xl"
            >
              Create
            </Link>
          </div>
          <div className="flex gap-2">
            <img src="./images/Link.svg" alt="Link" className="w-7" />
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                handleTotal();
                setCreate(false);
              }}
              className="text-xl"
            >
              Links
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                handleAccount();
                setCreate(false);
              }}
              className="text-xl flex items-center gap-2"
            >
              <i className="fa-solid fa-user w-7"></i>
              Account
            </Link>
          </div>
        </div>

        {page && (
          <Create
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            handleTotal={handleTotal}
          />
        )}
        {total && <Total handlePage={handlePage} />}
        {account && (
          <Account
            logout={logout}
            setLogout={setLogout}
            handleLogout={handleLogout}
            isLoading={false}
            setIsLoading={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default TrimSection;
