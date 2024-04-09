import { useContext, useState } from "react";
import Footer from "../utilities/Footer";
import Nav from "../utilities/Nav";
import TrimSection from "../utilities/TrimSection";
import { PostContextValue } from "../../App";

interface TrimProp {
  PostContext: React.Context<PostContextValue>;
}

function TrimUrl({ PostContext }: TrimProp) {
  const { user, handleLogout } = useContext(PostContext);
  const [logout, setLogout] = useState(false);
  return (
    <div className="font-customFont overflow-hidden">
      {logout && <div className="overlay"></div>}
      <div className="">
        <Nav user={user} />
      </div> 
      <TrimSection
        logout={logout}
        setLogout={setLogout}
        handleLogout={handleLogout}
      />
      <Footer /> 
    </div>
  );
}

export default TrimUrl;
