/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-toastify";

function SignUpForm() {
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
    getValues,
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <div className="flex flex-col w-[500px] my-0 mx-auto pt-8">
        <div>
          <p className="text-sm translate-x-[250%] inline-block pb-5">
            Sign Up with:
          </p>
          <div className="flex items-center justify-center gap-6 pb-4">
            <button >
              <img src="../images/Google.svg" alt="Google icon" />
            </button>
            <button >
              <img src="../images/Apple.svg" alt="Apple icon" />
            </button>
          </div>
        </div>
        <p className="text-center">Or</p>
        <form
          className="pt-5 flex flex-col duration-300 gap-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <input
              {...register("username", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
              className="w-full border-2 border-blue focus:outline-none focus:border-2 rounded-[14px] placeholder:text-sm py-2 px-3"
              type="text"
              placeholder="Username"
            />
            {errors.username && (
              <p className="text-[12px] pt-[3px] pl-[8px] text-validRed">{`${errors.username.message}`}</p>
            )}
          </div>
          <div>
            <input
              {...register("email", {
                required: "Email is required",
              })}
              className="w-full border-2 border-blue focus:outline-none focus:border-2 rounded-[14px] placeholder:text-sm py-2 px-3"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-[12px] pt-[3px] pl-[8px] text-validRed">{`${errors.email.message}`}</p>
            )}
          </div>
          <div>
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
                placeholder="Password"
                onClick={togglePasswordVisibility}
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
          <div>
            <div className="flex items-center relative">
              <input
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === getValues("password") || "Password must match",
                })}
                className="w-full border-2 border-blue focus:outline-none focus:border-2 rounded-[14px] placeholder:text-sm py-2 px-4"
                type={showPassword ? "text" : "password"}
                placeholder="Retype Password"
              />
              <img
                className="absolute right-2"
                src="../images/eye.svg"
                alt=""
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-[12px] pt-[3px] pl-[8px] text-validRed">{`${errors.confirmPassword.message}`}</p>
            )}
          </div>
          <div>
            <input
              className="w-full text-center text-white border cursor-pointer border-blue bg-blue px-4 py-3 rounded-3xl pointer-events-auto hover:bg-white hover:text-blue  transition dura"
              type="submit"
              disabled={isSubmitting}
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
    </>
  );
}

export default SignUpForm;
