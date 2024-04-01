/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, facebookProvider, googleProvider } from "../../config/firebase";

const initialState = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

interface SignFormProps {
  setUser: (user: User) => void;
  setLogin: (value: boolean) => void;
}

function SignUpForm({ setUser, setLogin }: SignFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const { email, password, userName, confirmPassword } = state;
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (password !== confirmPassword) {
        return toast.error("Password don't match", {
          position: "bottom-left",
          autoClose: 2000,
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
      if (userName && email && password) {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(user, { displayName: userName });
      } else {
        return toast.error("All fields are mandatory to fill", {
          position: "bottom-left",
          autoClose: 2000,
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
      navigate("/trim");
      setLogin(true);
    } catch (error: unknown) {
      if (error instanceof Error) {
        const notify = () => {
          toast.error(`${error}`, {
            position: "bottom-left",
            autoClose: 2000,
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
      console.log(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setUser(user);
      navigate("/trim");
      setLoading(false);
      toast.success("Sign Up with Google Complete", {
        position: "bottom-left",
        autoClose: 2000,
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
      toast.error("Error signing Up with Google:", {
        position: "bottom-left",
        autoClose: 2000,
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
      toast.success("Sign In with Facebook Complete", {
        position: "bottom-left",
        autoClose: 2000,
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
      toast.error("Error Signing In with Facebook", {
        position: "bottom-left",
        autoClose: 2000,
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  if (loading) {
    return <div className="mt-40">Loading ....</div>;
  }

  return (
    <>
      <div className="flex flex-col w-[500px] my-0 mx-auto pt-8">
        <div>
          <p className="text-sm translate-x-[250%] inline-block pb-5">
            Sign Up with:
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
          onSubmit={signIn}
        >
          <div>
            <input
              className="w-full border-2 border-blue focus:outline-none focus:border-2 rounded-[14px] placeholder:text-sm py-2 px-3"
              type="text"
              name="userName"
              placeholder="Username"
              value={userName}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="w-full border-2 border-blue focus:outline-none focus:border-2 rounded-[14px] placeholder:text-sm py-2 px-3"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="flex items-center relative">
              <input
                className="w-full border-2 border-blue focus:outline-none focus:border-2 rounded-[14px] placeholder:text-sm py-2 px-4"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
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
          <div>
            <div className="flex items-center relative">
              <input
                className="w-full border-2 border-blue focus:outline-none focus:border-2 rounded-[14px] placeholder:text-sm py-2 px-4"
                type={showPassword ? "text" : "password"}
                placeholder="Retype Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
              />
              <img
                className="absolute right-2"
                src={showPassword ? "../images/eye_2.svg" : "../images/eye.svg"}
                alt="eye-img"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
          <div>
            <input
              className="w-full text-center text-white border cursor-pointer border-blue bg-blue px-4 py-3 rounded-3xl pointer-events-auto hover:bg-white hover:text-blue  transition dura"
              type="submit"
              value="Sign up with Email"
            />
          </div>
        </form>
        <div>
          <p className="text-sm  text-navBlack text-center pt-5 pb-4">
            Already have an account?&nbsp;
            <Link
              to="/login"
              className="text-blue font-semibold text-[15px] text=center"
            >
              Login
            </Link>
          </p>
          <p className="text-center text-[#A0B1C0] text-sm">
            By signing up , you agree to{" "}
            <span className="block">
              Sciccor's &nbsp;
              <span className="text-navBlack">
                Terms of Service, Privacy Policy
              </span>{" "}
              &nbsp;and &nbsp;
              <span className="text-navBlack">Acceptable Use Policy</span>
            </span>
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default SignUpForm;
