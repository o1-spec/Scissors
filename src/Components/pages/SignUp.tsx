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
    <div className="font-customFont overflow-hidden">
      <SignUpForm setLogin={setLogin} setUser={setUser} />
      <Footer />
    </div>
  );
}

export default SignUp;
