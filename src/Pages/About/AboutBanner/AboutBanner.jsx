import React from 'react';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
function AboutBanner() {
  return (
    <div className="bg-[#2443b4] min-h-64  text-white pt-12">
      <div className="text-center text-2xl font-bold pt-16 ">About Us</div>

      <div className="flex justify-center items-center gap-2 pt-6">
        <h1 className="text-white font-semibold"> Home</h1>
        <h1>
          {' '}
          <MdKeyboardDoubleArrowRight className="mt-1" />
        </h1>
        <h1 className="opacity-70 font-semibold">About us</h1>
      </div>
    </div>
  );
}

export default AboutBanner;
