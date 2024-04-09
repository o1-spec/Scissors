//import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-no-repeat py-16">
        <p className="text-center">&copy; Copyright Onadokun Oluwafemi 2024</p>
        <div>
          <div className="flex gap-3 items-center justify-center pt-2">
            <Link to="https://twitter.com/Oluwafemi166">
              <img src="./images/i.fi-social-twitter.svg" alt="twitter" />
            </Link>
            <Link to="https://instagram.com/black_dokun">
              <img src="./images/svg.feather.svg" alt="instagram" />
            </Link> 
            <Link to="tel:07058266972">
              <img
                src="./images/i.fi-social-linkedin.svg"
                alt="fi-social-linkedin"
              />
            </Link>
            <Link to="mailto:oluwafemionadokun@gmail.com">
              <i className="fa fa-envelope text-xl" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
