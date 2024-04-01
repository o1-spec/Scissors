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
      <LoginForm setLogin={setLogin} setUser={setUser} />
      <Footer />
    </div>
  );
}

export default Login;
