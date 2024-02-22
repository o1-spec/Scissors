import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer-bg bg-no-repeat py-28">
        <div className="max-w-[1000px] my-0 mx-auto">
          <div className="grid grid-cols-5 gap-y-6">
            <div className="flex flex-col gap-3 row-span-2">
              <img
                className="w-40"
                src="./images/Logo.svg"
                alt="logo"
              />
              <div className="flex gap-3">
                <Link to="/">
                  <img src="./images/i.fi-social-twitter.svg" alt="twitter" />
                </Link>
                <Link to="/">
                  <img src="./images/svg.feather.svg" alt="instagram" />
                </Link>
                <Link to="/">
                  <img
                    src="./images/i.fi-social-linkedin.svg"
                    alt="fi-social-linkedin"
                  />
                </Link>
                <Link to="/">
                  <img src="./images/i.fi-social-twitter.svg" alt="twitter" />
                </Link>
              </div>
            </div>
            <div className="footer-link">
              <span className="text-xl text-navBlack font-semibold inline-block pb-4"> Why Scissors </span>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Scissor 101 </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Integrations & API </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Pricing </Link>
                </li>
              </ul>
            </div>
            <div className="footer-link">
              <span className="text-xl text-navBlack font-semibold inline-block pb-4"> Solutions </span>
              <ul>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Social Media </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Digital Marketing </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Custom Service </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> For Developers </Link>
                </li>
              </ul>
            </div>
            <div className="footer-link">
              <span className="text-xl text-navBlack font-semibold inline-block pb-4"> Products </span>
              <ul>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Link Management </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> QR Code </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Link in Bio </Link>
                </li>
              </ul>
            </div>
            <div className="footer-link">
              <span className="text-xl text-navBlack font-semibold inline-block pb-4"> Company </span>
              <ul>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> About Scissors </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Careers </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Partner </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Press </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Contact </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Reviews </Link>
                </li>
              </ul>
            </div>
            <div className="footer-link">
              <span className="text-xl text-navBlack font-semibold inline-block pb-4"> Resources </span>
              <ul>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Blog </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Resource Library </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Developers </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> App connectors </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Support </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Trust Center </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Browser Extension </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Mobile App </Link>
                </li>
              </ul>
            </div>
            <div className="footer-link">
              <span className="text-xl text-navBlack font-semibold inline-block pb-4"> Features </span>
              <ul>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Branded Links </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Mobile Links </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Campaign </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Management & Analytics </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> QR Code generation </Link>
                </li>
              </ul>
            </div>
            <div className="footer-link">
              <span className="text-xl text-navBlack font-semibold inline-block pb-4"> Legal </span>
              <ul>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Priacy Policy </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Cookie Policy </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Terms Of Service </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Acceptabe Use Policy </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-navBlack"> Code of Conduct </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-end pt-12">
            <Link to="/" className="text-navBlack text-sm">
              Terms of Service | Security | Scissor <span className="text-blue underline">2023</span>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
