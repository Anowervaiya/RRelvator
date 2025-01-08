import React from 'react';
import { FaCheck } from 'react-icons/fa6';

function IndustryEstablish() {
  return (
    <div>
      <div className="    my-16">
        <div
          className="flex  items-center flex-col lg:flex-row gap-8
        "
        >
          <div className="flex-1">
            {' '}
            <img
              src="/industry.avif"
              className="  shadow-md "
            />
          </div>
          <div className="flex-1  text-center lg:text-start ">
            <h1 className="text-4xl font-bold leading-snug">
              Redefining Excellence as Leaders in Elevator Industry
            </h1>
            <p className="py-6 leading-7">
              We are a trusted elevator company specializing in installation,
              maintenance, repair, and modernization. Delivering safety,
              innovation, and superior service, we set industry standards for
              reliability and customer satisfaction.
            </p>

            <div className="text-start flex lg:justify-start justify-center gap-12 items-center mx-auto lg:mx-0 ">
              <div className="*:flex *:justify-start leading-8 *:items-center ">
                <div>
                  <FaCheck className=" text-blue-500 bg-slate-200  rounded-full w-6 h-6 p-1  " />{' '}
                  <span className="ml-2">Comprehensive elevator solutions</span>{' '}
                </div>
                <div className="">
                  <FaCheck className=" text-blue-500  bg-slate-200  rounded-full w-6 h-6 p-1 " />{' '}
                  <span className="ml-2">
                    Focused on safety and reliability
                  </span>{' '}
                </div>
                <div>
                  <FaCheck className="text-blue-500 bg-slate-200  rounded-full w-6 h-6 p-1  " />{' '}
                  <span className="ml-2">Industry-leading technology</span>
                </div>
              </div>
              <div className="*:flex *:justify-start leading-8 *:items-center">
                <div>
                  <FaCheck className="text-blue-500 bg-slate-200  rounded-full w-6 h-6 p-1 " />{' '}
                  <span className="ml-2">
                    Skilled and certified technicians
                  </span>{' '}
                </div>
                <div>
                  <FaCheck className="text-blue-500  bg-slate-200  rounded-full w-6 h-6 p-1 " />{' '}
                  <span className="ml-2">Exceptional customer service</span>{' '}
                </div>
                <div>
                  <FaCheck className="text-blue-500  bg-slate-200  rounded-full w-6 h-6 p-1 " />{' '}
                  <span className="ml-2">
                    Proven track record of excellence
                  </span>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustryEstablish;
