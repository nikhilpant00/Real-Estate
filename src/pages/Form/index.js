// import React, { useState } from "react";
// import SignBg from "../../assets/images/loginbg.jpg";
// import "./index.scss";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
// import { Link } from "react-router-dom";

// const schema = Yup.object().shape({
//   name: Yup.string().required("Name is required"),
//   email: Yup.string()
//     .required("Please Enter your Email")
//     .matches(/@[^.]*\./, "Must match like: abc@mail.com")
//     .email("Invalid email address")
//     .required("Email is required"),
//   password: Yup.string()
//     .required("Please Enter your password")
//     .matches(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
//       "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
//     )
//     .required("Password is required"),
//   confirmpassword: Yup.string()
//     .required("Please Confirm your password")
//     .oneOf([Yup.ref("password"), null], "Passwords must match"),
// });
// function Form() {
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const [isConfirmPasswordVisible, setIsConfirmVisible] = useState(false);
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });
//   const isDisabled = Object.keys(errors).length > 0;
//   const onSubmit = (data) => {
//     console.log(data);
//     reset();
//   };
//   return (
//     <div className="form">
//       <div className="sign__content">
//         <form className="sign__form" onSubmit={handleSubmit(onSubmit)}>
//           <div>
//             <h1 className="sign__title">
//               <span>Welcome</span>
//             </h1>
//             <p className="sign__description">Please Fill Property Details.</p>
//           </div>
//           <div>
//             <div className="sign__inputs">
//               <div>
//                 <label htmlFor="name" className="sign__label">
//                   Property Id
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter your full name"
//                   {...register("name")}
//                   className="sign__input"
//                 />
//               </div>
//               {errors.name && (
//                 <p
//                   style={{
//                     fontSize: 12,
//                     color: "red",
//                     fontWeight: "bold",
//                     minHeight: "20px",
//                   }}
//                 >
//                   {errors.name.message}
//                 </p>
//               )}
//               <div>
//                 <label htmlFor="email" className="sign__label">
//                   Address
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter your email address"
//                   {...register("email")}
//                   className="sign__input"
//                 />
//               </div>
//               {errors.email && (
//                 <p
//                   style={{
//                     fontSize: 12,
//                     color: "red",
//                     fontWeight: "bold",
//                     minHeight: "20px",
//                   }}
//                 >
//                   {errors.email.message}
//                 </p>
//               )}
//               <div>
//                 <label htmlFor="password" className="sign__label">
//                   ID Proof
//                 </label>
//                 <div className="sign__box">
//                   <input
//                     type={isPasswordVisible ? "text" : "password"}
//                     placeholder="Enter your password"
//                     {...register("password")}
//                     className="sign__input"
//                     id="input-pass"
//                   />
//                   {/* <div
//                     onClick={() => {
//                       setIsPasswordVisible(!isPasswordVisible);
//                     }}
//                   >
//                     {isPasswordVisible ? (
//                       <AiOutlineEye className="sign__eye" />
//                     ) : (
//                       <AiOutlineEyeInvisible className="sign__eye" />
//                     )}
//                   </div> */}
//                 </div>
//               </div>
//               {errors.password && (
//                 <p
//                   style={{
//                     fontSize: 12,
//                     color: "red",
//                     fontWeight: "bold",
//                     minHeight: "20px",
//                   }}
//                 >
//                   {errors.password.message}{" "}
//                 </p>
//               )}
//               <div>
//                 <label htmlFor="password" className="sign__label">
//                   Documents
//                 </label>
//                 <div className="sign__box">
//                   <input
//                     type={isConfirmPasswordVisible ? "text" : "password"}
//                     placeholder="Confirm your password"
//                     {...register("confirmpassword")}
//                     className="sign__input"
//                   />
//                   {/* <div
//                     onClick={() => {
//                       setIsConfirmVisible(!isConfirmPasswordVisible);
//                     }}
//                   >
//                     {isConfirmPasswordVisible ? (
//                       <AiOutlineEye className="sign__eye" id="input-icon" />
//                     ) : (
//                       <AiOutlineEyeInvisible className="sign__eye" />
//                     )}
//                   </div> */}
//                 </div>
//               </div>
//               {errors.confirmpassword && (
//                 <p
//                   style={{
//                     fontSize: 12,
//                     color: "red",
//                     fontWeight: "bold",
//                     minHeight: "20px",
//                   }}
//                 >
//                   {errors.confirmpassword.message}{" "}
//                 </p>
//               )}
//             </div>
//             {/* <div className="sign__check">
//               <input type="checkbox" className="sign__check-input" />
//               <label htmlFor="" className="sign__check-label">
//                 Remember me
//               </label>
//             </div> */}
//           </div>
//           <div>
//             <div className="sign__buttons">
//               <button
//                 className="sign__button"
//                 disabled={isDisabled}
//                 onClick={() => console.log("hello")}
//               >
//                 Submit
//               </button>
//               {/* <button className="sign__button sign__button-ghost">
//                 Sign Up
//               </button> */}
//             </div>
            
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default Form;

import React from "react";
import { ErrorMessage, Formik } from "formik";
import { mixed, object, string } from "yup";
import "./index.scss";
import { useParams } from "react-router-dom";

const CustomErrorMessage = ({ children }) => (
  <span style={{ color: "red", fontSize: "14px" }}>{children}</span>
);

const validationSchema = object().shape({
  addField: mixed()
    .required("File is required")
    .test(
      "fileFormat",
      "Unsupported file format",
      (value) => value && ["image/jpeg", "image/png"].includes(value.type)
    )
    .test(
      "fileSize",
      "File 1 size is too large",
      (value) => value && value.size <= 5000000
    ),
  panField: mixed()
    .required("File is required")
    .test(
      "fileFormat",
      "Unsupported file format",
      (value) => value && ["image/jpeg", "image/png"].includes(value.type)
    )
    .test(
      "fileSize",
      "File 2 size is too large",
      (value) => value && value.size <= 5000000
    ),
  adharField: mixed()
    .required("File is required")
    .test(
      "fileFormat",
      "Unsupported file format",
      (value) => value && ["image/jpeg", "image/png"].includes(value.type)
    )
    .test(
      "fileSize",
      "File 2 size is too large",
      (value) => value && value.size <= 5000000
    ),
  remark: string().required("Remark is required"),
  addRadio: string().required("A option is required"),
  panRadio: string().required("A option is required"),
  adharRadio: string().required("A option is required"),
});

const Form = () => {
  const resetForm = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  };

  // const { username } = (props.location && props.location.state) || {};
  const { clientName } = useParams();


  
        return (
          <div
            className={`content content  `}
          >
            <Formik
              enableReinitialize
              validationSchema={validationSchema}
              initialValues={{
                addField: null,
                panField: null,
                adharField: null,
                remark: "",
                addRadio: "",
                panRadio: "",
                adharRadio: "",
              }}
              onSubmit={(
                values,
                { setSubmitting, setFieldError, resetForm }
              ) => {
                resetForm({ values: "" });
                validationSchema
                  .validate(values)
                  .then(() => {
                    console.log(values);
                    // resetForm()
                  })
                  .catch((err) => {
                    setFieldError("file", err.errors[0]);
                  })
                  .finally(() => {
                    setSubmitting(false);
                  });
              }}
            >
              {({
                handleChange,
                handleSubmit,
                values,
                setFieldValue,
                isValid,
              }) => (
                <div className="container-fluid pt-4 px-4">
                  <div className="col">
                    <div
                      className={` rounded h-100 p-4`}
                    >
                      <h1>hii</h1>
                      <h6 className={`mb-4 `}>
                        Upload the Documents Here
                      </h6>
                      <div className="mb-3">
                        <div className="row g-3 align-items-center mb-4">
                          <div className="col">
                            <label htmlFor="formFile" className="form-label">
                              Address Proof:
                            </label>
                          </div>
                          <div className="col-12 col-lg-4">
                            <input
                              className="form-control bg-dark"
                              type="file"
                              id="formFile"
                              name="addField"
                              onChange={(event) => {
                                setFieldValue(
                                  "addField",
                                  event.currentTarget.files[0]
                                );
                              }}
                            />
                          </div>
                          <div className="col">
                            <ErrorMessage
                              component={CustomErrorMessage}
                              name="addField"
                            />
                          </div>
                        </div>
                        <div className="row g-3 align-items-center mb-4">
                          <div className="col">
                            <label htmlFor="formFile" className="form-label">
                              Pan Card:
                            </label>
                          </div>
                          <div className="col-12 col-lg-4">
                            <input
                              className="form-control bg-dark"
                              type="file"
                              id="formFile"
                              name="panField"
                              onChange={(event) => {
                                setFieldValue(
                                  "panField",
                                  event.currentTarget.files[0]
                                );
                              }}
                            />
                          </div>
                          <div className="col">
                            <ErrorMessage
                              component={CustomErrorMessage}
                              name="panField"
                            />
                          </div>
                        </div>
                        <div className="row g-3 align-items-center mb-4">
                          <div className="col">
                            <label htmlFor="formFile" className="form-label">
                              Aadhaar Card:
                            </label>
                          </div>
                          <div className="col-12 col-lg-4">
                            <input
                              className="form-control bg-dark"
                              type="file"
                              id="formFile"
                              name="adharField"
                              onChange={(event) => {
                                setFieldValue(
                                  "adharField",
                                  event.currentTarget.files[0]
                                );
                              }}
                            />
                          </div>
                          <div className="col">
                            <ErrorMessage
                              component={CustomErrorMessage}
                              name="adharField"
                            />
                          </div>
                        </div>
                        <div className="row g-3 align-items-center mb-4">
                          <div className="col">
                            <label htmlFor="formFile" className="form-label">
                              Is Address Proof valid?
                            </label>
                          </div>
                          <div className="col-12 col-lg-4">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="addRadio"
                                onChange={(event) => {
                                  setFieldValue(
                                    "addRadio",
                                    event.currentTarget.value
                                  );
                                }}
                                id="inlineRadio1"
                                value="yes"
                                checked={values.addRadio === "yes"}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio1"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="addRadio"
                                onChange={(event) => {
                                  setFieldValue(
                                    "addRadio",
                                    event.currentTarget.value
                                  );
                                }}
                                id="inlineRadio2"
                                value="no"
                                checked={values.addRadio === "no"}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio2"
                              >
                                No
                              </label>
                            </div>
                          </div>
                          <div className="col">
                            <ErrorMessage
                              component={CustomErrorMessage}
                              name="addRadio"
                            />
                          </div>
                        </div>
                        <div className="row g-3 align-items-center mb-4">
                          <div className="col">
                            <label htmlFor="formFile" className="form-label">
                              Is Pan valid?
                            </label>
                          </div>
                          <div className="col-12 col-lg-4">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="panRadio"
                                onChange={(event) => {
                                  setFieldValue(
                                    "panRadio",
                                    event.currentTarget.value
                                  );
                                }}
                                id="inlineRadio1"
                                value="yes"
                                checked={values.panRadio === "yes"}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio1"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="panRadio"
                                onChange={(event) => {
                                  setFieldValue(
                                    "panRadio",
                                    event.currentTarget.value
                                  );
                                }}
                                id="inlineRadio2"
                                value="no"
                                checked={values.panRadio === "no"}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio2"
                              >
                                No
                              </label>
                            </div>
                          </div>
                          <div className="col">
                            <ErrorMessage
                              component={CustomErrorMessage}
                              name="panRadio"
                            />
                          </div>
                        </div>
                        <div className="row g-3 align-items-center mb-4">
                          <div className="col">
                            <label htmlFor="formFile" className="form-label">
                              Is Aadhaar valid?
                            </label>
                          </div>
                          <div className="col-12 col-lg-4">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="adharRadio"
                                onChange={(event) => {
                                  setFieldValue(
                                    "adharRadio",
                                    event.currentTarget.value
                                  );
                                }}
                                id="inlineRadio1"
                                value="yes"
                                checked={values.adharRadio === "yes"}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio1"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="adharRadio"
                                onChange={(event) => {
                                  setFieldValue(
                                    "adharRadio",
                                    event.currentTarget.value
                                  );
                                }}
                                id="inlineRadio2"
                                value="no"
                                checked={values.adharRadio === "no"}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inlineRadio2"
                              >
                                No
                              </label>
                            </div>
                          </div>
                          <div className="col">
                            <ErrorMessage
                              component={CustomErrorMessage}
                              name="adharRadio"
                            />
                          </div>
                        </div>
                        <div className="row g-3 align-items-center mb-4">
                          <div className="col">
                            <label htmlFor="formFile" className="form-label">
                              Remarks:
                            </label>
                          </div>
                          <div className="col-12 col-lg-4">
                            <input
                              type="text"
                              className="form-control"
                              aria-describedby="passwordHelpInline"
                              name="remark"
                              value={values.remark}
                              onChange={handleChange("remark")}
                            />
                          </div>
                          <div className="col">
                            <ErrorMessage
                              component={CustomErrorMessage}
                              name="remark"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="m-n2">
                        <button
                          type="button"
                          onClick={() => {
                            handleSubmit();
                            resetForm();
                          }}
                          className="btn-upload m-2"
                          disabled={!isValid}
                        >
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Formik>
          </div>
        );
                      
};

export default Form;
