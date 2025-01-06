import React from 'react';

function FAQ() {
  return (
    <div className="  my-28  container mx-auto ">
      <div className="mt-10 mb-16">
        <div></div>
        <div>
          <h1 className="text-4xl text-center font-bold ml-4">
            Frequently Asked Question
          </h1>
        </div>
        <div className="lg:w-3/4 mx-auto">
          <h1 className=" ml-6 mt-4 text-[#52525c]  text-center">
            Choose us for our expertise, innovative solutions, and
            client-centric approach. We deliver high-quality digital marketing,
            web development, SEO, app development, and graphic design services
            tailored to your business needs.
          </h1>
        </div>
      </div>
      <div className="flex  items-center flex-col lg:flex-row-reverse">
        <div className="flex-1">
          {' '}
          <img src="/faqs.jpg" className="w-full  h-[500px] lg:h-full " />
        </div>
        <div className="flex-1  text-center lg:text-start ">
          <div className="text-start  mx-auto lg:mx-0">
            <div className="space-y-4    *:rounded-md *:transition-all *:duration-500 *:shadow-differenceCard">
              <div className="collapse collapse-plus">
                <input
                  type="radio"
                  name="my-accordion-2"
                  defaultChecked
                  className="peer"
                />
                <div className="collapse-title text-xl font-medium peer-checked:bg-blue-900 peer-checked:text-white">
                  What services do you offer?
                </div>
                <div className="collapse-content">
                  <p className="mt-4">
                    We offer a wide range of services, including elevator
                    installation, annual maintenance, modernization, repair, and
                    troubleshooting. Our solutions are tailored to meet the
                    needs of both residential and commercial buildings.
                  </p>
                </div>
              </div>

              <div className="collapse group collapse-plus">
                <input type="radio" name="my-accordion-2" className="peer" />
                <div className="collapse-title text-xl font-medium peer-checked:bg-blue-900 peer-checked:text-white">
                  How often should elevators be maintained?
                </div>
                <div className="collapse-content">
                  <p className="mt-4">
                    Regular maintenance is essential for safety and efficiency.
                    We recommend scheduling professional maintenance at least
                    once every three months or as per the manufacturer's
                    guidelines for optimal performance.
                  </p>
                </div>
              </div>

              <div className="collapse group collapse-plus">
                <input type="radio" name="my-accordion-2" className="peer" />
                <div className="collapse-title text-xl font-medium peer-checked:bg-blue-900 peer-checked:text-white">
                  Can you modernize old elevators?
                </div>
                <div className="collapse-content">
                  <p className="mt-4">
                    Yes, we specialize in elevator modernization. Whether you
                    need upgraded safety features, energy-efficient systems, or
                    a design refresh, our experts can transform your old
                    elevator to meet modern standards.
                  </p>
                </div>
              </div>
              <div className="collapse group collapse-plus">
                <input type="radio" name="my-accordion-2" className="peer" />
                <div className="collapse-title text-xl font-medium peer-checked:bg-blue-900 peer-checked:text-white">
                  What should I do if an elevator breaks down?
                </div>
                <div className="collapse-content">
                  <p className="mt-4">
                    In the event of a breakdown, contact our 24/7 emergency
                    service team immediately. Avoid attempting repairs yourself.
                    We will promptly dispatch a technician to diagnose and
                    resolve the issue safely and efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
