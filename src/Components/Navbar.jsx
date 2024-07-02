import React from "react";
//import the image filepreview.png
import filepreview from "../assets/filepreview.png";
import reactLogo from "../assets/react.svg";

function Navbar() {
  return (
    <>
      <div className="w-[98.5vw] ml-[0.2vw] h-[9vh] rounded-full bg-slate-950 flex justify-between  top-0 left-0 right-0 px-[10vh] items-center  fixed  z-50 ">
        <div className="logo flex h-[10vh] items-center gap-2">
          <img
            src="https://avatars.githubusercontent.com/u/25107602?s=280&v=4"
            alt="logo"
            className="w-[2vw] h-[2vw]"
          />
          <a href="/">
            {" "}
            <h1 className="text-2xl text-white font-semibold ">FilePreviews</h1>
          </a>
        </div>

        <div className="links flex mx-3 h-[8vh] items-center justify-center gap-10 px-[5vw] rounded-3xl bg-slate-950 bg">
          <a
            href="/"
            className="text-white hover:bg-slate-100 hover:h-[4vh]  hover:text-black duration-300 font-bold rounded-2xl px-[8px] cursor-pointer "
          >
            Home
          </a>
          <a
            href="/upload"
            className="text-white hover:bg-slate-100 hover:h-[4vh] hover:text-black duration-300 font-bold rounded-2xl px-[8px] cursor-pointer"
          >
            Upload files{" "}
          </a>
          <a
            href="/view"
            className="text-white hover:bg-slate-100 hover:h-[4vh] hover:text-black duration-300 font-bold rounded-2xl px-[8px] cursor-pointer"
          >
            View Files
          </a>
        </div>

        <div className="flex h-[10vh] items-center   w-[15vw] justify-end">
          <a
            href="/login"
            className="text-white hover:bg-slate-100 hover:h-[4vh] hover:text-black font-semibold rounded-2xl px-[8px] cursor-pointer flex items-center"
          >
            Login
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
