import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
function CoreValueCard({ Icon, Heading, Desc }) {
  return (
    <div className="flex flex-col justify-center items-center space-y-1 px-3  py-8 h-full  relative bg-white text-black hover:bg-blue-100 transition-all ease-in-out duration-300">
      <span className="text-blue-700 text-7xl">{Icon}</span>
      <h1 className="text-xl font-semibold font-serif text-center py-3">
        {Heading}
      </h1>
      <p className="text-center max-w-[300px] text-sm leading-5 text-wrap">
        {Desc}
      </p>
     
    </div>
  );
}

export default CoreValueCard;
