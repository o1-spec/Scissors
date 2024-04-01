import { Link } from "react-router-dom";

function TrimSection() {
  return (
    <div className="max-w-[1000px] my-0 mx-auto pt-16">
      <div className="flex gap-1">
        <div className="flex flex-col gap-12 basis-[16%] border-r border-t pt-4 pr-4 border-r-navBlack">
          <div className="flex gap-2">
            <img src="./images/Link.svg" alt="Link" className="w-7" />
            <Link to="/" className="text-xl">
              Link
            </Link>
          </div>
          <div className="flex gap-2">
            <img src="./images/Analytics.svg" alt="Analytics" className="w-7" />
            <Link to="/" className="text-xl">
              Analytics
            </Link>
          </div>
        </div>
        <div className="basis-[84%] pl-6 pt-4">
          <h2 className="text-3xl font-bold pb-4">Create link</h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xl font-bold">URL Destination</label>
              <input
                type="text"
                className="border focus:outline-1 focus:outline-navBlack px-2 py-[2px] rounded-[4px]"
              />
              <span className="text-linkGray text-sm">
                You can create more than 10 links per month
              </span>
              <span className="text-linkGray text-sm"></span>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl font-bold">Alias</label>
              <input
                type="text"
                className="border focus:outline-navBlack px-2 py-[2px] rounded-[4px]"
              />
            </div>
            <div>
              <h5 className="text-xl font-bold">QR Code Generator</h5>
              <div className="w-44 h-44 hidden"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-end pt-5">
              <button className="bg-blue text-white px-4 py-2.5 rounded-lg">
                Create Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrimSection;
