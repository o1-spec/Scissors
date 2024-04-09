import { useContext } from "react";
import { PostContextValue } from "../../App";
import Footer from "../utilities/Footer";
import LoginForm from "../utilities/LoginForm";

interface LoginProp {
  PostContext: React.Context<PostContextValue>;
}
function Login({ PostContext }: LoginProp) {
  const { setLogin, setUser } = useContext(PostContext);

  return (
    <div className="font-customFont overflow-hidden">
      {/*<div className="footer-bg w-full h-full absolute top-5 left-0 right-0 bottom-0 -z-10"></div>*/}
      <LoginForm setLogin={setLogin} setUser={setUser} />
      <Footer />
    </div>
  );
}

export default Login;
