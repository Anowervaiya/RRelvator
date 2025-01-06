import React from 'react'
import Heading from '../../../Components/Heading';

function WhatMakesUsDifference() {
  return (
    <div className="  my-28  container mx-auto ">
      <Heading
        Heading={'What Makes Us Difference '}
        desc={
          'We combine innovation, expertise, and personalized solutions to deliver exceptional results. Our customer-focused approach ensures quality, reliability, and tailored services that set us apart from competitors'
        }
      ></Heading>
      <div className="flex  items-center flex-col lg:flex-row-reverse gap-20">
        <div className="flex-1">
          {' '}
          <img src="/differenc.png" className="   " />
        </div>
        <div className="flex-1 text-start ">
          <div className="*:shadow-differenceCard *:p-4 *:mb-4 *:flex *:items-center  *:gap-6">
            <div className="">
              <img src="/custom.png" alt="" className="w-[50px]" />
              <div className="space-y-2 *:text-start">
                <h1 className=" text-xl font-semibold font-serif text-blue-900">
                  Customized Solutions
                </h1>
                <p className="">
                  We offer tailored elevator designs to meet your {' '}
                  specific needs and preferences.
                </p>
              </div>
            </div>
            <div>
              <img src="/quality.png" alt="" className="w-[50px]" />
              <div className="space-y-2">
                <h1 className=" text-xl font-semibold font-serif text-blue-900">
                  Unmatched Quality
                </h1>
                <p>
                  Our elevators are built with premium materials ensuring
                  safety,
                   reliability, and durability.
                </p>
              </div>
            </div>
            {/* <div>
              <img src="" alt="" />
              <div className="space-y-2">
                <h1 className=" text-xl font-semibold font-serif text-blue-900">
                  Innovation-Driven
                </h1>
                <p>
                  Advanced technology ensures seamless performance and
                  innovative elevator features.
                </p>
              </div>
            </div> */}
            <div>
              <img src="/exceptional.png" alt="" className="w-[50px]" />
              <div className="space-y-2">
                <h1 className=" text-xl font-semibold font-serif text-blue-900">
                  Exceptional Service
                </h1>
                <p>
                  From installation to maintenance, we provide comprehensive,
                  customer-centric support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatMakesUsDifference