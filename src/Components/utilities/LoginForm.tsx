import { useState } from "react";
import { Link } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const Login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      const notify = () => {
        toast.error(`${error.message}`, {
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
      console.log(error.message);
    }
  };

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <div className="flex flex-col w-[500px] my-0 mx-auto pt-12">
        <div>
          <p className="text-sm translate-x-[300%] inline-block pb-5">
            Log in with:
          </p>
          <div className="flex items-center justify-center gap-6 pb-4">
            <Link to="/">
              <img src="../images/Google.svg" alt="Google icon" />
            </Link>
            <Link to="/">
              <img src="../images/Apple.svg" alt="Apple icon" />
            </Link>
          </div>
        </div>
        <p className="text-center">Or</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="pt-5 flex flex-col duration-300 gap-y-6"
        >
          <div>
            <input
              {...register("email", {
                required: "Email is required",
              })}
              className="w-full border-2 border-blue focus:outline-none focus:border-2 rounded-[14px] placeholder:text-sm py-2 px-3"
              type="email"
              placeholder="Email address or username"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-[12px] pt-[3px] pl-[8px] text-validRed">{`${errors.email.message}`}</p>
            )}
          </div>
          <div className="">
            <div className="flex items-center relative">
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 10,
                    message: "Password must be at least 10 characters",
                  },
                })}
                className="w-full border-2 border-blue focus:outline-none focus:border-2 rounded-[14px] placeholder:text-sm py-2 px-4"
                type={showPassword ? "text" : "password"}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                className="cursor-pointer absolute right-2"
                src={showPassword ? "../images/eye_2.svg" : "../images/eye.svg"}
                alt="eye-img"
                onClick={togglePasswordVisibility}
              />
            </div>
            {errors.password && (
              <p className="text-[12px] pt-[3px] pl-[8px] text-validRed">{`${errors.password.message}`}</p>
            )}
          </div>
          <Link to="/reset" className="text-right text-blue text-sm">
            Forgot your password
          </Link>
          <div>
            <input
              type="submit"
              className="w-full text-center text-white border cursor-pointer border-blue bg-blue px-4 py-3 rounded-3xl pointer-events-auto hover:bg-white hover:text-blue  transition dura"
              value="login"
              disabled={isSubmitting}
              onClick={Login}
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
      <ToastContainer />
    </>
  );
}

export default LoginForm;
