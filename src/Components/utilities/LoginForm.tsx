import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  User,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, facebookProvider, googleProvider } from "../../config/firebase";

const initialState = {
  email: "",
  password: "",
};

interface LoginFormProps {
  setUser: (user: User) => void;
  setLogin: (value: boolean) => void;
}

function LoginForm({ setLogin, setUser }: LoginFormProps) {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState(initialState);
  const { email, password } = state;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (email && password) {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        navigate("/trim");
        setUser(user);
        setLoading(true);
        setLogin(true);
      } else {
        return toast.error("All fields are mandatory to fill", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          style: {
            fontSize: "1rem",
          },
        });
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        const notify = () => {
          toast.error(`${err}`, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            style: {
              fontSize: "1rem",
            },
          });
        };
        notify();
      }
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setUser(user);
      navigate("/trim");
      setLoading(false);
      toast.success("Login with Google Complete", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          fontSize: "1rem",
        },
      });
    } catch (error: unknown) {
      toast.error("Error logging in with Google", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          fontSize: "1rem",
        },
      });
    }
  };
  
  const signInWithFacebook = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;
      setUser(user);
      navigate("/trim");
      setLoading(false);
      toast.success("Login with Facebook Complete", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          fontSize: "1rem",
        },
      });
    } catch (error: unknown) {
      toast.error("Error Loging In with Facebook", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          fontSize: "1rem",
        },
      });
    }
  };

  if (loading) {
    return (
      <div>
        <p className="text-xl">Loading ....</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col md:w-[500px] px-4 md:px-0 my-0 mx-auto pt-12">
        <div>
          <p className="text-sm md:translate-x-[300%] translate-x-[200%] inline-block pb-5">
            Log in with:
          </p>
          <div className="flex items-center justify-center gap-6 pb-4">
            <button onClick={signInWithGoogle}>
              <img src="../images/Google.svg" alt="Google icon" />
            </button>
            <button
              onClick={signInWithFacebook}
              className="bg-white flex gap-1.5 items-center text-blue border border-blue py-1.5 px-3 rounded-md"
            >
              <i className="fa-brands fa-facebook-f text-lg"></i>
              <span>Facebook</span>
            </button>
          </div>
        </div>
        <p className="text-center">Or</p>
        <form
          className="pt-5 flex flex-col duration-300 gap-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              className="w-full border-2 border-blue focus:outline-none focus:border-2 rounded-[14px] placeholder:text-sm py-2 px-3"
              type="email"
              placeholder="Email address or username"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <div className="flex items-center relative">
              <input
                className="w-full border-2 border-blue focus:outline-none focus:border-2 rounded-[14px] placeholder:text-sm py-2 px-4"
                type={showPassword ? "text" : "password"}
                placeholder="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
              <img
                className="cursor-pointer absolute right-2"
                src={showPassword ? "../images/eye_2.svg" : "../images/eye.svg"}
                alt="eye-img"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
          <Link to="/reset" className="text-right text-blue text-sm">
            Forgot your password
          </Link>
          <div>
            <input
              type="submit"
              className="w-full text-center text-white border cursor-pointer border-blue bg-blue px-4 py-3 rounded-3xl pointer-events-auto hover:bg-white hover:text-blue  transition dura"
              value="login"
            />
          </div>
        </form>
        <div>
          <p className="text-sm  text-navBlack text-center pt-5 pb-4">
            Dont have an account?&nbsp;
            <Link
              to="/signup"
              className="text-blue font-semibold text-[15px] text=center"
            >
              Sign Up
            </Link>
          </p>
          <p className="text-center text-[#A0B1C0] text-sm">
            By signing in with an account, you agree to Sciccor's &nbsp;
            <span className="text-navBlack">
              Terms of Service, Privacy Policy
            </span>{" "}
            &nbsp;and &nbsp;
            <span className="text-navBlack">Acceptable Use Policy</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
