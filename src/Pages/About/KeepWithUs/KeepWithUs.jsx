import React from 'react';
import keepImage from '/keep.avif'; // Adjust path as needed

const KeepWithUs = () => {
  return (
    <div className=" ">
      <div className="relative bg-gradient-to-r from-[#0000ff] to-[#fdfdfd] text-white p-6 rounded-lg  shadow-lg min-h-[200px] flex flex-col justify-center *:ml-6 ">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 "
          style={{ backgroundImage: `url(${keepImage})` }}
        ></div>
        <div className="relative z-10">
          <h2 className="text-xl font-bold">
            Always keep With <br /> Us
          </h2>
        </div>
        <button className=" z-10 bg-white text-orange-500 font-semibold py-2 px-4 rounded hover:bg-orange-400 hover:text-white mt-4 max-w-[180px] cursor-pointer">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default KeepWithUs;
