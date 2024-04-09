import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function Possibilities() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section data-aos="fade-up" className="bg-usersWhite -translate-x-3">
      <div className="my-0 mx-auto py-5 px-4 md:px-4 lg:px-3 max-w-[1100px]">
        <div className="flex md:items-center items-start justify-between flex-col md:flex-row">
          <div className="users-head">
            <p className="font-semibold text-4xl md:pb-0 pb-8">
              One stop
              <br />
              Four <span className="text-blue">Possibilities</span>
            </p>
          </div>
          <div className="flex md:items-center items-start gap-6 md:gap-0  flex-col md:flex-row">
            <div className="user">
              <span className="text-navBlack font-semibold text-3xl pb-4">
                {" "}
                3M{" "}
              </span>
              <p className="md:text-sm text-md">Active Users</p>
            </div>
            <div className="user">
              <span className="text-navBlack font-semibold text-3xl pb-4">
                {" "}
                60M{" "}
              </span>
              <p className="md:text-sm text-md">Links & QR codes created</p>
            </div>
            <div className="user">
              <span className="text-navBlack font-semibold text-3xl pb-4">
                {" "}
                1B{" "}
              </span>
              <p className="md:text-sm text-md">Clicked & Scanned connections</p>
            </div>
            <div className="user">
              <span className="text-navBlack font-semibold text-3xl pb-4">
                {" "}
                300K{" "}
              </span>
              <p className="md:text-sm text-md">App integrations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Possibilities;
