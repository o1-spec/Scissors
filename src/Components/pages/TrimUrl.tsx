import Footer from "../utilities/Footer";
import Nav from "../utilities/Nav";
import TrimSection from "../utilities/TrimSection";

function TrimUrl() {
  return (
    <div className="font-customFont overflow-hidden">
      <Nav />
      <TrimSection/>
      <Footer/>
    </div>
  );
}

export default TrimUrl;
