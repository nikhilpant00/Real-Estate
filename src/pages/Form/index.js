import React from "react";
import "./index.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// import { create } from "ipfs-http-client";
const schema = Yup.object().shape({
  // file: Yup.mixed()
  //   .required("File is required")
  //   .test(
  //     "fileFormat",
  //     "PDF ONLY",
  //     (value) =>
  //       value &&
  //       (
  //         value[0].type === "image/jpeg" ||
  //         value[0].type === "image/bmp" ||
  //         value[0].type === "image/png" ||
  //         value[0].type === "application/pdf" ||
  //         value[0].type === "application/msword"
  //       ).includes(value.type)
  //   )
  //   .test(
  //     "fileSize",
  //     "File size is too large",
  //     (value) => value && value.size <= 5000000
  //   ),
  address: Yup.string().required("Address is required"),
  transaction: Yup.string().required("Transaction ID is required"),
  area: Yup.string().required("Area is required"),
  dimension: Yup.string().required("Dimension is required"),
  currentowner: Yup.string().required("Owner's Name is required"),
  property: Yup.string().required("Property ID is required"),
  type: Yup.string().required("Type is required"),
});
const Form = () => {
  // const { clientName } = useParams();
  // const ipfs = create("http://localhost:5001");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const isDisabled = Object.keys(errors).length > 0;
  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await fetch("http://localhost:5000/api/mine1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        reset();
      } else {
        console.error("Error saving data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className={`content content  `}>
      <div className="container-fluid pt-4 px-4">
        <div className="col">
          <div class="formbold-main-wrapper">
            <div class="formbold-form-wrapper">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={` rounded h-100 p-4 formbold-form-title`}>
                  <h6 className={`mb-4 `}>Upload the Documents Here</h6>
                  <div className="mb-3">
                    <div className="row g-3 align-items-center mb-4">
                      <div className="col">
                        <label
                          htmlFor="formFile"
                          className="form-label formbold-form-label"
                        >
                          Land Registry Document(PDF):
                        </label>
                      </div>
                      <div className="col-12 col-lg-4">
                        <input
                          className="form-control bg-light formbold-form-input"
                          type="file"
                          {...register("file")}
                        />
                      </div>
                      <div className="col">
                        {errors.file && (
                          <p
                            style={{
                              fontSize: 12,
                              color: "red",
                              fontWeight: "bold",
                              minHeight: "20px",
                            }}
                          >
                            {errors.file.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="row g-3 align-items-center mb-4">
                      <div className="col">
                        <label
                          htmlFor="address"
                          className="form-label formbold-form-label"
                        >
                          Address:
                        </label>
                      </div>
                      <div className="col-12 col-lg-4">
                        <input
                          className="form-control bg-light formbold-form-input"
                          type="text"
                          placeholder="Enter address"
                          {...register("address")}
                        />
                      </div>
                      <div className="col">
                        {errors.address && (
                          <p
                            style={{
                              fontSize: 12,
                              color: "red",
                              fontWeight: "bold",
                              minHeight: "20px",
                            }}
                          >
                            {errors.address.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="row g-3 align-items-center mb-4">
                      <div className="col">
                        <label
                          htmlFor="propertyid"
                          className="form-label formbold-form-label"
                        >
                          Property ID:
                        </label>
                      </div>
                      <div className="col-12 col-lg-4">
                        <input
                          className="form-control bg-light formbold-form-input"
                          type="text"
                          placeholder="Enter Property ID"
                          {...register("property")}
                        />
                      </div>
                      <div className="col">
                        {errors.property && (
                          <p
                            style={{
                              fontSize: 12,
                              color: "red",
                              fontWeight: "bold",
                              minHeight: "20px",
                            }}
                          >
                            {errors.property.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="row g-3 align-items-center mb-4">
                      <div className="col">
                        <label
                          htmlFor="transactionid"
                          className="form-label formbold-form-label"
                        >
                          Transaction ID:
                        </label>
                      </div>
                      <div className="col-12 col-lg-4">
                        <input
                          className="form-control bg-light formbold-form-input"
                          type="text"
                          placeholder="Enter Transaction ID"
                          {...register("transaction")}
                        />
                      </div>
                      <div className="col">
                        {errors.transaction && (
                          <p
                            style={{
                              fontSize: 12,
                              color: "red",
                              fontWeight: "bold",
                              minHeight: "20px",
                            }}
                          >
                            {errors.transaction.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="row g-3 align-items-center mb-4">
                      <div className="col">
                        <label
                          htmlFor="currentowner"
                          className="form-label formbold-form-label"
                        >
                          Current Owner:
                        </label>
                      </div>
                      <div className="col-12 col-lg-4">
                        <input
                          className="form-control bg-light formbold-form-input"
                          type="text"
                          placeholder="Enter Name of Owner"
                          {...register("currentowner")}
                        />
                      </div>
                      <div className="col">
                        {errors.currentowner && (
                          <p
                            style={{
                              fontSize: 12,
                              color: "red",
                              fontWeight: "bold",
                              minHeight: "20px",
                            }}
                          >
                            {errors.currentowner.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="row g-3 align-items-center mb-4">
                      <div className="col">
                        <label
                          htmlFor="area"
                          className="form-label formbold-form-label"
                        >
                          Area:
                        </label>
                      </div>
                      <div className="col-12 col-lg-4">
                        <input
                          className="form-control bg-light formbold-form-input"
                          type="text"
                          placeholder="Enter Area in sqft"
                          {...register("area")}
                        />
                      </div>
                      <div className="col">
                        {errors.area && (
                          <p
                            style={{
                              fontSize: 12,
                              color: "red",
                              fontWeight: "bold",
                              minHeight: "20px",
                            }}
                          >
                            {errors.area.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="row g-3 align-items-center mb-4">
                      <div className="col">
                        <label
                          htmlFor="type"
                          className="form-label formbold-form-label"
                        >
                          Type:
                        </label>
                      </div>
                      <div className="col-12 col-lg-4">
                        <input
                          className="form-control bg-light formbold-form-input"
                          type="text"
                          placeholder="Enter Type of the Property"
                          {...register("type")}
                        />
                      </div>
                      <div className="col">
                        {errors.type && (
                          <p
                            style={{
                              fontSize: 12,
                              color: "red",
                              fontWeight: "bold",
                              minHeight: "20px",
                            }}
                          >
                            {errors.type.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="row g-3 align-items-center mb-4">
                      <div className="col">
                        <label
                          htmlFor="dimension"
                          className=" formbold-form-label"
                        >
                          Dimension:
                        </label>
                      </div>
                      <div className="col-12 col-lg-4">
                        <input
                          className="form-control bg-light formbold-form-input"
                          type="text"
                          placeholder="Enter Dimension"
                          {...register("dimension")}
                        />
                      </div>
                      <div className="col">
                        {errors.dimension && (
                          <p
                            style={{
                              fontSize: 12,
                              color: "red",
                              fontWeight: "bold",
                              minHeight: "20px",
                            }}
                          >
                            {errors.dimension.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="m-2">
                    <button
                      className="btn-upload mt-5"
                      disabled={isDisabled}
                      onClick={() => console.log("hello")}
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;