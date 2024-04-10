import Aos from "aos";
import { useEffect } from "react";

function Choose() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section data-aos="fade-up" id="features" className="max-w-[1070px] my-0 mx-auto pt-24 pb-8 md:px-0 px-4">
        <div className="flex items-start gap-32 md:gap-16 lg:gap-32 md:px-4 lg:px-0 flex-col md:flex-row">
          <div className="basis-2/5">
            <h4 className="text-4xl font-extrabold pb-3">
              <span className="line"></span> 
              Why Choose <span className="text-blue">Scissors</span>
            </h4>
            <p className="text-md md:text-sm leading-6">
              Scissors is the hub of everything that has to do with your link
              management. We shorten your URLs, allow you creating custom ones
              for your personal, business, event usage. Our swift QR code
              creation, management and usage tracking with advance analytics for
              all of these is second to none
            </p>
          </div>
          <div className="md:grid md:grid-cols-2 flex flex-col gap-x-14 gap-y-8 basis-3/5">
            <div className="scissors-box">
              <img className="mb-6 rounded-full p-3 bg-scissorsBlack" src="./images/link-2 (2).svg" alt="" />
              <h6 className="font-semibold text-3xl pb-5">URL Shortening</h6>
              <p className="text-[15px] md:text-sm">
                Scissor allows you to shorten URLs of your business, events.
                Shorten your URL at scale, URL redirects.
              </p>
            </div>
            <div className="scissors-box">
              <img className="mb-6 rounded-full p-3 bg-scissorsBlack" src="./images/edit (1).svg" alt="" />
              <h6 className="font-semibold text-3xl pb-5">Custom URLs</h6>
              <p className="text-[15px] md:text-sm">
                With Scissor, you can create custom URLs, with the length you
                want! A solution for socials and businesses.
              </p>
            </div>
            <div className="scissors-box">
              <img className="mb-6 rounded-full p-3 bg-scissorsBlack" src="./images/grid (1).svg" alt="" />
              <h6 className="font-semibold text-3xl pb-5">QR Codes</h6>
              <p className="text-[15px] md:text-sm">
                Generate QR codes to your business, events. Bring your audience
                and customers to your doorstep with this scan and go solution.
              </p>
            </div>
            <div className="scissors-box">
              <img className="mb-6 rounded-full p-3 bg-scissorsBlack" src="./images/activity (1).svg" alt="" />
              <h6 className="font-semibold text-3xl pb-5">Data Analytics</h6>
              <p className="text-[15px] md:text-sm">
                Receive data on the usage of either your shortened URL, custom
                URLs or generated QR codes. Embedded to monitor progress.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Choose;
