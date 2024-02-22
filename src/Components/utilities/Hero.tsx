import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className="px-[100px] py-[100px]">
        <div className="hero">
          <div className="flex items-center text-center flex-col">
            <div className="hero-head">
              <h2 className="text-navBlack text-[48px] font-extrabold px-[70px] leading-relaxed">
                Optimize Your Online Experience With Our Advanced URL &nbsp;
                <span className="text-blue relative">
                  Shortening
                  <img
                    src="./images/Vector 3.svg"
                    className="absolute -bottom-[40%] -left-0"
                  />
                  &nbsp; Solution
                </span>
              </h2>
            </div>
            <div className="hero-text px-[160px] pt-8 leading-6 text-lg">
              <p>
                Personalize your shortened URLs to align with your brand
                identity. Utilize custom slugs, branded links, and domain
                customization options to reinforce your brand presence and
                enhance user engagement.
              </p>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <Link
                to="/"
                className="text-white font-normal text-[16px] px-8 py-3 rounded-2xl bg-blue hover:bg-white hover:text-blue border-blue border-[1px] transition duration-300"
              >
                Sign Up
              </Link>
              <Link to="/" className="text-blue text-sm">
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
                  <p className="text-center text-[1rem] text-navBlack px-44 py-4">
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

      <section className="bg-usersWhite -translate-x-3">
        <div className="my-0 mx-auto py-5 px-3 max-w-[1100px]">
          <div className="flex items-center justify-between">
            <div className="users-head">
              <p className="font-semibold text-4xl">
                One stop
                <br />
                Four <span className="text-blue">Possibilities</span>
              </p>
            </div>
            <div className="flex items-center gap-10">
              <div className="user">
                <span className="text-navBlack font-semibold text-3xl pb-4"> 3M </span>
                <p className="text-sm">Active Users</p>
              </div>
              <div className="user">
                <span className="text-navBlack font-semibold text-3xl pb-4"> 60M </span>
                <p className="text-sm">Links & QR codes created</p>
              </div>
              <div className="user">
                <span className="text-navBlack font-semibold text-3xl pb-4"> 1B </span>
                <p className="text-sm">Clicked & Scanned connections</p>
              </div>
              <div className="user">
                <span className="text-navBlack font-semibold text-3xl pb-4"> 300K </span>
                <p className="text-sm">App integrations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
