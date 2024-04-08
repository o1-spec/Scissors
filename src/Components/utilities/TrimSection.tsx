import { Link } from "react-router-dom";
import { useState } from "react";
import Create from "./Create";
import Total from "./Total";
import Account from "./Account";

export interface TrimSection {
  logout: boolean;
  setLogout: (value: boolean) => void;
  handleLogout: () => void;
}

function TrimSection({ logout, setLogout, handleLogout }: TrimSection) {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(true);
  const [account, setAccount] = useState(false);
  const [total, setTotal] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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

  return (
    <div className="pt-16 px-16 footer-bg bg-no-repeat">
      <div className="flex gap-1 h-full">
        <div className="flex flex-col gap-16 basis-[16%] min-h-[60vh] border-r border-t pt-8 pr-4 border-r-navBlack">
          <div className="flex gap-2">
            <img src="./images/Link.svg" alt="Link" className="w-7" />
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                handlePage();
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
              }}
              className="text-xl flex items-center gap-2"
            >
              <i className="fa-solid fa-user w-7"></i>
              Account
            </Link>
          </div>
        </div>
        {page && <Create isLoading={isLoading} setIsLoading={setIsLoading} />}
        {total && <Total />}
        {account && (
          <Account
            logout={logout}
            setLogout={setLogout}
            handleLogout={handleLogout}
          />
        )}
      </div>
    </div>
  );
}

export default TrimSection;
