import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Nav";

export default function home() {
  return (
    <div>
      <Navbar />
      <div className="lg:flex flex-cols px-[6rem] mt-20 lg:space-x-80">
        <div className="">
          <h2 className="text-5xl leading-[4rem] font-bold">
            {" "}
            Welcome <br /> To The <br /> Trivia Challenge
          </h2>
          <h4 className=" text-2xl mt-5">
            You will be presented with 10 True or false question
          </h4>
          <h4 className="text-2xl mt-5">Can you score 100% ? </h4>
          <div className="div mt-5">
            <Link to="/quiz">
              <button className="bg-yellow-500 p-5 text-white rounded-2xl lg:w-40">
                LET START
              </button>
            </Link>
          </div>
        </div>
        <div className="">
          <img
            src="./assets/BG.png"
            alt="herre"
            width={500}
            height={200}
            className="bg-image"
          />
        </div>
      </div>
    </div>
  );
}
