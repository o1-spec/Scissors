import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  const [count, setCount] = useState(5);
  const [seconds, setSeconds] = useState("seconds");

  const Redirect = () => {
    setTimeout(() => {
      navigate(-1);
      location.href = "/";
    }, 4000);

    setInterval(() => {
      setCount(count - 1);
    }, 1000);

    if (count === 1) {
      setSeconds("second");
    }

    return (
      <div className="mt-5 text-center">
        <p>
          Redirecting back in {count} {seconds}...
        </p>
      </div>
    );
  };

  return (
    <div className="font-customFont">
      <div className="flex z-20 bg-white items-center gap-2 pt-4 pb-3 pl-4 w-full shadow-md">
        <i className="fa-solid fa-scissors text-blue text-2xl"></i>
        <span className="font-extrabold text-3xl text-blue">SCISSORS</span>
      </div>
      <div className="flex items-center justify-center w-full flex-col h-full mt-[30vh] gap-2 px-3">
        <p className="text-xl text-center">
          This page does not exist. Please go back
        </p>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue text-white rounded-md px-5 py-2 text-lg"
        >
          Back{" "}
        </button>
      </div>
      <Redirect />
    </div>
  );
}

export default ErrorPage;
