import React from 'react'
import './WhyChooseUs.css'
import Heading from '../../../Components/Heading'
import { RiUserSettingsLine } from 'react-icons/ri';
import { GrUserExpert } from 'react-icons/gr';
import { TfiSupport } from 'react-icons/tfi';
function WhyChooseUs() {
  return (
    <div className="container mx-auto mt-28">
      {' '}
      <Heading
        Heading={'Why Choose Us'}
        desc={
          '   Choose us for reliable, safe, and efficient elevator solutions. Our expert team offers top-notch installation, maintenance, and repair services, ensuring smooth, safe rides for years.'
        }
      ></Heading>
      <section class="choose-container">
        <div class="flex gap-5 flex-col md:flex-row mb-5">
          <div class="card card1">
            <GrUserExpert className="text-5xl text-blue-800" />
            <h3 class="description-title">Expert Installation</h3>
            <p class="description text-sm">
              We provide professional, timely installation of elevators tailored
              to your needs, ensuring seamless integration with your building's
              design and structure.
            </p>
          </div>
          <div class="card card2">
            <RiUserSettingsLine className="text-5xl text-blue-800" />
            <h3 class="description-title">Comprehensive Maintenance</h3>
            <p class="description text-sm">
              Our dedicated team offers routine maintenance services to ensure
              your elevator operates smoothly, reducing downtime and extending
              its lifespan.
            </p>
          </div>
        </div>
        <div className='flex w-full  '>
          <div class=" card3 w-full md:w-1/2 md:mx-auto">
            <TfiSupport className="text-5xl text-blue-800" />
            <h3 class="description-title">24/7 Emergency Support</h3>

            <p class="description text-sm ">
              We offer round-the-clock emergency repair services, ensuring your
              elevator is quickly fixed and operational, prioritizing the safety
              and convenience of your passengers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyChooseUs