import React, { useEffect, useState } from 'react';

function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0); // Tracks the active div
    const testimonials = [
      {
        text: 'We are providing the best and suitable home insurance services for the people who are interested to treatment',
        name: 'Ilham Yuda',
        profession: 'Businessman',
        image:'./anower1.png'
      },
      {
        text: 'We offer personalized home insurance services that cater to individual needs and provide peace of mind.',
        name: 'Sarah Connor',
        profession: 'Entrepreneur',
        image:'/anower1.png'
      },
      {
        text: 'Our home insurance policies are designed to ensure your safety and comfort at the most affordable rates.',
        name: 'John Doe',
        profession: 'Investor',
        image:'/anower1.png'
      },
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
      }, 2000); // Change every 2 seconds
      return () => clearInterval(interval); // Cleanup on unmount
    }, [testimonials.length]);

  return (
    <div>
      <section className="bg-gradient-to-r from-[#0040ff] to-[#ca38ff] h-[800px] p-16 lg:h-auto lg:p-0">
        <div className=" flex flex-col lg:flex-row lg:gap-32 rounded-lg gap-20 py-[155px]  container mx-auto">
          <div className="flex items-center flex-1">
            <div className="space-y-7 ">
              <h1 class="font-bold text-5xl text-white">
                Meet Our Super Clients
              </h1>
              <p class="text-[#F4F4F4] font-bold">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.{' '}
              </p>
              <button class="bg-white rounded-lg">
                <span class="btn bg-clip-text text-transparent bg-gradient-to-r from-[#F00] to-[#FF8938] ">
                  Explore More{' '}
                </span>
              </button>
            </div>
          </div>

          <div className="relative flex-1">
            <div>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute transition-all duration-500 rounded-lg p-[40px] bg-white 
            ${
              activeIndex === index
                ? 'opacity-100 z-20 scale-100'
                : 'opacity-0 z-10 scale-90'
            }
            ${activeIndex === index ? 'top-0' : 'top-10'}
          `}
                  style={{
                    transform: `translatey(${(index - activeIndex) * 120}%)`, // Adjust positioning based on activeIndex
                  }}
                >
                  <img
                    src={testimonial?.image}
                    className="absolute -top-12 -left-12 border  rounded-full border-white bg-white w-24 h-24"
                    alt=""
                  />
                  <div>
                    <p className="text-[#777]">{testimonial.text}</p>
                    <h3 className="font-semibold mt-8 mb-3">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#777]">{testimonial.profession}</p>
                    <div className="flex justify-end">
                      <img src="images/circles.png" alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
