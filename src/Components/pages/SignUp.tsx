import { useContext } from "react";
import { PostContextValue } from "../../App";
import Footer from "../utilities/Footer";
import SignUpForm from "../utilities/SignUpForm";

interface signUpProp {
  PostContext: React.Context<PostContextValue>;
}

function SignUp({ PostContext }: signUpProp) {
  const {setLogin, setUser } = useContext(PostContext);
  return (
    <div className="font-customFont overflow-hidden bg-no-repeat">
      <div className="footer-bg w-full h-full absolute top-5 left-0 right-0 bottom-0 -z-10"></div>
      <SignUpForm setLogin={setLogin} setUser={setUser} />
      <Footer />
    </div>
  );
}

export default SignUp;
