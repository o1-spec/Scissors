function ErrorPage() {
  return (
    <div className="font-customFont">
      <div className="flex z-20 bg-white items-center gap-2 pt-4 pb-3 pl-4 w-full shadow-md">
        <i className="fa-solid fa-scissors text-blue text-2xl"></i>
        <span className="font-extrabold text-3xl text-blue">SCISSORS</span>
      </div>
      <div className="flex items-center justify-center w-full flex-col h-full mt-[30vh] gap-2 px-3">
        <p className="text-xl text-center">This page does not exist. Please go back</p>
        <button className="bg-blue text-white rounded-md px-5 py-2 text-lg">
          Back{" "}
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
