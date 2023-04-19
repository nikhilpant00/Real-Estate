import React, { useState } from "react";
import SignBg from "../../assets/images/loginbg.jpg";
import "./index.scss";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Parallax } from "@react-spring/parallax";
const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Please Enter your Email")
    .matches(/@[^.]*\./, "Must match like: abc@mail.com")
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("Password is required"),
  confirmpassword: Yup.string()
    .required("Please Confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
function SignUp() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmVisible] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const isDisabled = Object.keys(errors).length > 0;
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <Parallax>
      <>
        <Navbar
          leftLinks={[
            { title: "Home", direct: "/" },
            { title: "Subscription", direct: "/subscription" },
          ]}
          rightLinks={[
            { title: "Sign Up", direct: "/SignUp" },
            { title: "Login", direct: "/login" },
          ]}
        />
        <div className="sign-container">
          <div className="sign__content">
            {/* <img src={SignBg} alt="sign image" className="sign__img" /> */}
            <form className="sign__form" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <h1 className="sign__title">
                  <span>Welcome</span>
                </h1>
                <p className="sign__description">
                  Please register to continue.
                </p>
              </div>
              <div>
                <div className="sign__inputs">
                  <div>
                    <label htmlFor="name" className="sign__label">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      {...register("name")}
                      className="sign__input"
                    />
                  </div>
                  {errors.name && (
                    <p
                      style={{
                        fontSize: 12,
                        color: "red",
                        fontWeight: "bold",
                        minHeight: "20px",
                      }}
                    >
                      {errors.name.message}
                    </p>
                  )}
                  <div>
                    <label htmlFor="email" className="sign__label">
                      Email
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your email address"
                      {...register("email")}
                      className="sign__input"
                    />
                  </div>
                  {errors.email && (
                    <p
                      style={{
                        fontSize: 12,
                        color: "red",
                        fontWeight: "bold",
                        minHeight: "20px",
                      }}
                    >
                      {errors.email.message}
                    </p>
                  )}
                  <div>
                    <label htmlFor="password" className="sign__label">
                      Password
                    </label>
                    <div className="sign__box">
                      <input
                        type={isPasswordVisible ? "text" : "password"}
                        placeholder="Enter your password"
                        {...register("password")}
                        className="sign__input"
                        id="input-pass"
                      />
                      <div
                        onClick={() => {
                          setIsPasswordVisible(!isPasswordVisible);
                        }}
                      >
                        {isPasswordVisible ? (
                          <AiOutlineEye className="sign__eye" />
                        ) : (
                          <AiOutlineEyeInvisible className="sign__eye" />
                        )}
                      </div>
                    </div>
                  </div>
                  {errors.password && (
                    <p
                      style={{
                        fontSize: 12,
                        color: "red",
                        fontWeight: "bold",
                        minHeight: "20px",
                      }}
                    >
                      {errors.password.message}{" "}
                    </p>
                  )}
                  <div>
                    <label htmlFor="password" className="sign__label">
                      Confirm Password
                    </label>
                    <div className="sign__box">
                      <input
                        type={isConfirmPasswordVisible ? "text" : "password"}
                        placeholder="Confirm your password"
                        {...register("confirmpassword")}
                        className="sign__input"
                      />
                      <div
                        onClick={() => {
                          setIsConfirmVisible(!isConfirmPasswordVisible);
                        }}
                      >
                        {isConfirmPasswordVisible ? (
                          <AiOutlineEye className="sign__eye" id="input-icon" />
                        ) : (
                          <AiOutlineEyeInvisible className="sign__eye" />
                        )}
                      </div>
                    </div>
                  </div>
                  {errors.confirmpassword && (
                    <p
                      style={{
                        fontSize: 12,
                        color: "red",
                        fontWeight: "bold",
                        minHeight: "20px",
                      }}
                    >
                      {errors.confirmpassword.message}{" "}
                    </p>
                  )}
                </div>
                {/* <div className="sign__check">
              <input type="checkbox" className="sign__check-input" />
              <label htmlFor="" className="sign__check-label">
                Remember me
              </label>
            </div> */}
              </div>
              <div>
                <div className="sign__buttons">
                  <button
                    className="sign__button"
                    disabled={isDisabled}
                    onClick={() => console.log("hello")}
                  >
                    Sign Up
                  </button>
                  {/* <button className="sign__button sign__button-ghost">
                Sign Up
              </button> */}
                </div>
                <p className="sign__description">Already have a account?</p>
                <Link to="/login" className="sign__forgot">
                  Login Here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </>
    </Parallax>
  );
}
export default SignUp;
