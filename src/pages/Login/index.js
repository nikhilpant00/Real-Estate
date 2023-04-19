import React, { useState } from "react";
import "./index.scss";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Parallax } from "@react-spring/parallax";
import { useNavigate } from "react-router-dom";
const schema = Yup.object().shape({
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
});
function Login(props) {
  const Navigate= useNavigate();
  const [isVisible, setIsVisible] = useState(false);
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
        <div className="login-container">
          <div className="login__content">
            {/* <img src={LoginBg} alt="login image" className="login__img" /> */}
            <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <h1 className="login__title">
                  <span>Welcome</span>
                </h1>
                <p className="login__description">Please login to continue.</p>
              </div>
              <div>
                <div className="login__inputs">
                  <div>
                    <label htmlFor="email" className="login__label">
                      Email
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your email address"
                      {...register("email")}
                      className="login__input"
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
                    <label htmlFor="password" className="login__label">
                      Password
                    </label>
                    <div className="login__box">
                      <input
                        type={isVisible ? "text" : "password"}
                        placeholder="Enter your password"
                        {...register("password")}
                        className="login__input"
                        id="input-pass"
                      />
                      <div
                        onClick={() => {
                          setIsVisible(!isVisible);
                        }}
                      >
                        {isVisible ? (
                          <AiOutlineEye
                            className="login__eye"
                            id="input-icon"
                          />
                        ) : (
                          <AiOutlineEyeInvisible
                            className="login__eye"
                            id="input-icon"
                          />
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
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="login__check">
                  <input type="checkbox" className="login__check-input" />
                  <label htmlFor="remember" className="login__check-label">
                    Remember me
                  </label>
                </div>
              </div>
              <div>
                <div className="login__buttons">
                  <button
                    className="login__button"
                    disabled={isDisabled}
                    onClick={(event) => {props.setIsLogin(true); console.log('done'); event.preventDefault(); Navigate('/LoggedIn');}}
                  >
                    Log In
                  </button>
                  {/* <button className="login__button login__button-ghost">
                Sign Up
              </button> */}
                </div>
                <a href="#" className="login__forgot" style={{ color: "red" }}>
                  Forgot Password?
                </a>
                <p className="login__description">Already have a account?</p>
                <Link to="/signUp" className="login__forgot">
                  Sign Up Here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </>
    </Parallax>
  );
}
export default Login;
