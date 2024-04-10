import { useContext, useState } from "react";
import Footer from "../utilities/Footer";
import Nav from "../utilities/Nav";
import TrimSection from "../utilities/TrimSection";
import { PostContextValue } from "../../App";
import Loader from "../utilities/Loader";

interface TrimProp {
  PostContext: React.Context<PostContextValue>;
}

function TrimUrl({ PostContext }: TrimProp) {
  const { user, handleLogout } = useContext(PostContext);
  const [logout, setLogout] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="font-customFont overflow-hidden">
      {logout && <div className="overlay"></div>}
      <div className="">
        <Nav user={user} />
      </div>
      <TrimSection
        logout={logout}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setLogout={setLogout}
        handleLogout={handleLogout}
      />
      <Footer />
    </div>
  );
}

export default TrimUrl;
