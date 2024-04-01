import { User } from "firebase/auth";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav({ user }: { user: User | null }) {
  //console.log(user);
  const [scrolled, setScrolled] = useState(false);

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
        <nav className="flex items-center justify-between py-4 px-24 transition duration-300">
          <div className="flex items-center gap-2">
            <img src="./images/Vector (4).svg" alt="scissors-icon" />
            <img src="./images/Vector 2.svg" alt="scissors-line" />
            <span className="font-extrabold text-3xl text-blue">SCISSOR</span>
          </div>
          <ul className="flex items-center gap-12">
            <li className="nav-link url">
              <Link className="text-navBlack text-[17px]" to="/">
                {" "}
                MY URLS{" "}
              </Link>
            </li>
            <li className="nav-link flex items-center">
              <Link className="text-navBlack text-[17px]" to="/">
                {" "}
                Features{" "}
              </Link>
              <img src="./images/chevron-down.svg" alt="chevron-down" />
            </li>
            <li className="nav-link">
              <Link className="text-navBlack text-[17px]" to="/">
                {" "}
                Pricing{" "}
              </Link>
            </li>
            <li className="nav-link">
              <Link className="text-navBlack text-[17px]" to="/">
                {" "}
                Analytics{" "}
              </Link>
            </li>
            <li className="nav-link">
              <Link className="text-navBlack text-[17px]" to="/">
                {" "}
                FAQs{" "}
              </Link>
            </li>
            <div className="hidden">
              <Link to="/" className="log">
                Log in
              </Link>
              <Link to="/" className="try">
                Try for free
              </Link>
            </div>
          </ul>
          {!user ? (
            <div className="flex items-center gap-7">
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
            <div>
              <Link to="/trim">
                <img src="" alt="" />
                <p className="text-[27px] font-semibold italic font-designFont">
                  {user?.displayName}
                </p>
              </Link>
            </div>
          )}

          <div className="w-[3rem] hidden">
            <img
              className="menu-open"
              src="./images/icons8-menu-bar (1).svg"
              alt=""
            />
            <img
              className="menu-closed close"
              src="./images/icons8-cancel-50 (1).png"
              alt=""
            />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Nav;
