import { useContext, useEffect } from "react";
import Choose from "../utilities/Choose";
import Faq from "../utilities/Faq";
import Footer from "../utilities/Footer";
import Hero from "../utilities/Hero";
import Nav from "../utilities/Nav";
import Pricing from "../utilities/Pricing";
import Revo from "../utilities/Revo";
import UrlPaste from "../utilities/UrlPaste";
import { PostContextValue } from "../../App";
import { useLocation } from "react-router-dom";

interface HomepageProp {
  PostContext: React.Context<PostContextValue>;
}

function Homepage({ PostContext }: HomepageProp) {
  const { user } = useContext(PostContext);

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#faq") {
      const faqSection = document.getElementById("faq");
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  useEffect(() => {
    if (location.hash === "#features") {
      const featureSection = document.getElementById("features");
      if (featureSection) {
        featureSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  useEffect(() => {
    if (location.hash === "#pricing") {
      const pricingSection = document.getElementById("pricing");
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);
  return (
    <div className="font-customFont overflow-hidden">
      <Nav user={user} />
      <Hero user={user} />
      <Choose />
      <Pricing />
      <UrlPaste user={user} />
      <div id="faq">
        <Faq />
      </div>
      <Revo user={user} />
      <Footer />
    </div>
  );
}

export default Homepage;
