import { User } from "firebase/auth";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav({ user }: { user: User | null }) {
  //console.log(user);
  const [scrolled, setScrolled] = useState(false);
  const [nav, setNav] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const navbarClasses: string[] = ["header"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <>
      <header className={navbarClasses.join(" ")}>
        <nav className="flex items-center justify-between shadow-md py-4 lg:px-24 md:px-12 px-6 transition duration-300">
          <div className="flex items-center gap-2">
            <img src="./images/Vector (4).svg" alt="scissors-icon" />
            <img src="./images/Vector 2.svg" alt="scissors-line" />
            <span className="font-extrabold text-3xl text-blue">SCISSOR</span>
          </div>
          <ul
            className={
              nav
                ? "flex items-center gap-12 fixed flex-col lg:flex-row lg:relative top-0 left-0 bottom-0 right-0 pt-20 lg:pt-0 lg:bg-none bg-white z-20 md:z-0 transition-all duration-500"
                : "flex items-center gap-12 fixed flex-col lg:flex-row lg:relative top-0 left-0 bottom-0 right-0 md:bg-none pt-20 lg:pt-0 bg-white z-20 md:z-0 -translate-y-[800%] lg:-translate-y-0 transition-all duration-500"
            }
          >
            <img
              className="menu-closed close absolute right-3 top-4 lg:hidden"
              src="./images/icons8-cancel-50 (1).png"
              alt="cancel-icon"
              onClick={() => setNav(false)}
            />
            <div className="flex items-center gap-2 md:hidden">
              <img src="./images/Vector (4).svg" alt="scissors-icon" />
              <img src="./images/Vector 2.svg" alt="scissors-line" />
              <span className="font-extrabold text-3xl text-blue">SCISSOR</span>
            </div>
            <li className="nav-link url">
              <Link
                className="text-navBlack md:text-[17px] text-xl font-semibold"
                to="/"
                onClick={() => setNav(false)}
              >
                {" "}
                MY URLS{" "}
              </Link>
            </li>
            <li className="nav-link flex items-center">
              <Link
                className="text-navBlack md:text-[17px] text-xl font-semibold"
                to="/#features"
                onClick={() => setNav(false)}
              >
                {" "}
                Features{" "}
              </Link>
              <img src="./images/chevron-down.svg" alt="chevron-down" />
            </li>
            <li className="nav-link">
              <Link
                className="text-navBlack md:text-[17px] text-xl font-semibold"
                to="/#pricing"
                onClick={() => setNav(false)}
              >
                {" "}
                Pricing{" "}
              </Link>
            </li>
            <li className="nav-link">
              <Link
                className="text-navBlack md:text-[17px] text-xl font-semibold"
                to="/"
                onClick={() => setNav(false)}
              >
                {" "}
                Analytics{" "}
              </Link>
            </li>
            <li className="nav-link">
              <Link
                className="text-navBlack md:text-[17px] text-xl font-semibold"
                to="/#faq"
              >
                {" "}
                FAQs{" "}
              </Link>
            </li>
          </ul>
          {!user ? (
            <div className="md:flex items-center gap-7 absolute md:relative md:flex-row flex-col hidden md:mr-4 lg:mr-0">
              <Link to="/login" className="text-[14px] text-blue">
                Log in
              </Link>
              <Link
                to="/signup"
                className="text-white font-semibold text-[16px] px-6 py-3 rounded-2xl bg-blue hover:bg-white hover:text-blue border-blue border-[1px] transition duration-300"
              >
                Try for free
              </Link>
            </div>
          ) : (
            <div className="pr-10 md:pr-4">
              <Link to="/trim">
                <img src="" alt="" />
                <p className="text-[27px] font-semibold italic font-designFont">
                  {user?.displayName}
                </p>
              </Link>
            </div>
          )}

          <div className="w-[2rem] lg:hidden absolute right-3 md:right-5">
            <img
              className="menu-open"
              src="./images/icons8-menu-bar (1).svg"
              alt="Menu-icon"
              onClick={() => setNav(true)}
            />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Nav;
