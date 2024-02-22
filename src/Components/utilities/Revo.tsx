import { Link } from "react-router-dom";

function Revo() {
  return (
    <>
      <section className="bg-[#1E3448] py-16 bg-no-repeat revo-bg">
        <div className="flex flex-col items-center justify-center">
          <h6 className="text-white text-center pb-6 text-xl">Revolutionizing Link Optimization Get Started</h6>
          <Link to="/" className="text-white bg-blue text-sm rounded-2xl border border-blue font-semibold transition duration-300 py-5 px-8 hover:text-blue hover:bg-white"> Get Started </Link>
        </div>
      </section>
    </>
  );
}

export default Revo;
