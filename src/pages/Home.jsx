import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white ">
      <header className="bg-gray-100">
        <div className="py-4 px-7 max-w-7xl mx-auto">
          <img src="/meta-logo-.svg" alt="logo" className="w-36 h-24" />
        </div>
      </header>

      <div className="flex flex-col md:flex-row   w-full px-0 md:px-24 ">
        <div className="sm:w-1/2 lg:w-[30%] px-12 md:px-5 mt-24 min-h-screen overflow-auto">
          <img src="/blue_tick.png" alt="meta" className="w-16 h-16" />
          <h1 className="my-3 text-3xl md:text-[2.50rem] font-semibold">
            Stand out with Meta
            <br /> Verified
          </h1>
          <div className="mb-8"></div>
          <Link
            to="/verification"
            className="bg-[#0064e0] text-white rounded-full px-8 py-2 mt-4 inline-block text-base font-sans"
          >
            Apply
          </Link>
          <p className="mt-4 text-xl font-sans">
            Grow your social presence with Meta Verified – a new subscription
            bundle available for creators and businesses on Instagram and
            Facebook.
          </p>
          <p className="text-xl font-sans mt-7 mb-5">
            Sign up now for creators
          </p>
          <p className="mt-4 mb-0 text-xl ">
            <span className="font-bold">Are you a business?</span> Get more
            information on <br />
            <a href="#" className="text-[#0064e0] text-base underline">
              Meta verified for businesses
            </a>
          </p>
          <p className="italic text-xl mt-4">
            Features, availability, and pricing may vary by region.
          </p>
        </div>

        <div
          className="block w-full lg:w-[70%] bg-cover bg-center "
          style={{
            backgroundImage: 'url("/mainlogo.png")',
            height: "100vh",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
