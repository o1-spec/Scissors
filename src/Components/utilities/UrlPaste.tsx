import { Link } from "react-router-dom";

function UrlPaste() {
  return (
    <>
      <section className="relative overflow-y-hidden pt-20">
        <div className="flex items-center justify-center bg-[#1E3448] multiple-bg py-20 px-0 bg-no-repeat ">
          <div className="bg-white p-8 flex flex-col rounded-md max-w-[470px]">
            <div className="flex flex-col gap-4">
              <div className="url">
                <input
                  className="text-blue w-full rounded-md border border-blue text-sm p-4 placeholder:text-blue focus:outline-none"
                  type="text"
                  placeholder="please paste URL"
                />
              </div>
              <div className="w-full flex gap-5">
                <div className="domain">
                  <select
                    name="Choose Domain"
                    id="domain"
                    className="w-full border border-blue text-sm text-blue rounded-md p-4 focus:outline-none"
                  >
                    <option value="choose domain">Choose Domain</option>
                    <option value="basic">Basic</option>
                    <option value="professional">Professional</option>
                    <option value="teams">Teams</option>
                  </select>
                </div>
                <div className="allas">
                  <input type="text" placeholder="Type Allas Here"  className="text-blue w-full rounded-md border border-blue text-sm p-4 placeholder:text-blue focus:outline-none"/>
                </div>
              </div>
            </div>
            <div className="flex items-center py-5 justify-center">
              <Link to="/" className="bg-blue text-white rounded-3xl flex items-center justify-center gap-3 w-full p-4 text-center ">
                <img src="./images/magic wand.svg" alt="magic wand" />
                Trim URL
              </Link>
            </div>
            <p className="text-blue text-sm text-center">
              By clicking TrimURL, I agree to the <span>Terms of Service</span>,
              <span className="font-semibold">Privacy Policy</span> and Use of Cookies.
            </p>
          </div>
          {/*<div class="vector-box-1">
                <img class="vector-1" src="./images/Vector (5).svg" alt="Vector">
                <img class="vector-2" src="./images/Vector (5).svg" alt="Vector">
                <img class="vector-3" src="./images/Vector (5).svg" alt="Vector">
  </div></img>*/}
        </div>
      </section>
    </>
  );
}

export default UrlPaste;
