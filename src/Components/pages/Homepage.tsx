import Choose from "../utilities/Choose";
import Faq from "../utilities/Faq";
import Footer from "../utilities/Footer";
import Hero from "../utilities/Hero";
import Nav from "../utilities/Nav";
import Pricing from "../utilities/Pricing";
import Revo from "../utilities/Revo";
import UrlPaste from "../utilities/UrlPaste";

function Homepage() {
  return (
    <div className="font-customFont overflow-hidden">
      <Nav />
      <Hero/>
      <Choose/>
      <Pricing/>
      <UrlPaste/>
      <Faq/>
      <Revo/>
      <Footer/>
    </div>
  );
}

export default Homepage;
