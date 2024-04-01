import { useContext } from "react";
import Footer from "../utilities/Footer";
import Nav from "../utilities/Nav";
import TrimSection from "../utilities/TrimSection";
import { PostContextValue } from "../../App";

interface TrimProp {
  PostContext: React.Context<PostContextValue>;
}

function TrimUrl({ PostContext }: TrimProp) {
  const { user } = useContext(PostContext);
  return (
    <div className="font-customFont overflow-hidden">
      <Nav user={user} />
      <TrimSection />
      <Footer />
    </div>
  );
}

export default TrimUrl;
