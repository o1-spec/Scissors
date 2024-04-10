import { User } from "firebase/auth";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import Possibilities from "./Possibilities";

function Hero({ user }: { user: User | null }) {
  return (
    <>
      <section className="md:px-[100px] md:py-[100px] px-3 py-10 pt-14">
        <div className="hero">
          <div className="flex items-center text-center flex-col">
            <div className="hero-head">
              <h2 className="text-navBlack md:text-[48px] text-4xl font-extrabold md:px-[70px] px-4 md:leading-relaxed leading-14">
                Optimize Your Online Experience With Our Advanced URL &nbsp;
                <span className="text-blue relative">
                  Shortening 
                  <img
                    src="./images/Vector 3.svg"
                    className="absolute md:-bottom-[40%] -bottom-[20%] -left-0"
                  />
                  &nbsp; Solution
                </span>
              </h2>
            </div>
            <div className="hero-text md:px-[160px] px-6 pt-8 leading-6 text-lg h-[190px] sm:h-[150px] md:h-[175px] lg:h-[120px]">
              <p>
                Personalize your shortened URLs to align with your brand
                identity. Utilize custom slugs, branded links, and domain
                customization options to
                <ReactTyped
                  strings={[
                    "&nbsp; reinforce your brand presence and enhance user engagement",
                  ]}
                  typeSpeed={100}
                  loop
                />
              </p>
            </div>
            <div className="flex items-center gap-8 pt-4">
              {!user && (
                <Link 
                  to="/signup"
                  className="text-white font-normal text-[16px] px-8 py-3 rounded-2xl bg-blue hover:bg-white hover:text-blue border-blue border-[1px] transition duration-300"
                >
                  Sign Up
                </Link>
              )}
              <Link to="/#faq" className="text-blue text-sm">
                Learn more
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center pt-24 ">
            <div className="hero-box-content">
              <div className="absolute -z-10">
                <img src="./images/Vector 2 (2).svg" alt="" />
              </div>
              <div className="bg-chainBlack border-blue border-[1px] rounded-lg px-9 py-10 max-w-[800px] backdrop-blur-lg">
                <div className="chain-img">
                  <img src="./images/Frame 1000001716.svg" alt="" />
                </div>
                <div>
                  <p className="text-center text-[1rem] text-navBlack md:px-44 px-10 py-4">
                    Seamlessly transform your long URLs into concise and
                    shareable links with just few clicks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full pt-20">
            <div className="absolute left-[8.6%] mt-4">
              <img src="./images/Ellipse 1.svg" alt="ellipse" />
            </div>
            <div className="absolute -z-10 ">
              <img src="./images/Rectangle 9.svg" alt="rectangle" />
            </div>
          </div>
        </div>
      </section>
      <Possibilities />
    </>
  );
}

export default Hero;
