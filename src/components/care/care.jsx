import React from "react";
import banner from "../../../public/CARES-BANNER.jpeg";

import Form from "../form";
import CareServices from "./typesofcare";

export default function Care() {
  return (
    <>
      <div className=" relative w-screen flex justify-center items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-50"></div>
        <img src={banner} alt="banner" className="h-auto w-full  sm:h-[450px] object-cover" />
        <div className="absolute inset-0 gradient-overlay "></div>
        <div className="absolute flex justify-center items-center text-center flex-col">
          <h1 className="xl:text-7xl lg:text-6xl md:text-5xl xxl:text-7xl text-2xl font-[700] text-white">Our Cares</h1>
          <p className="lg:text-2xl xl:text-2xl xxl:text-2xl md:text-xl text-sm font-[500] text-white sm:pt-2">Your health, our commitment</p>
        </div>
      </div>
      <CareServices />
    </>
  );
}
