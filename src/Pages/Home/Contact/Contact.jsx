import React from 'react';
import Heading from '../../../Components/Heading';
import { LuMapPin } from 'react-icons/lu';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineEmail, MdOutlineWatchLater } from 'react-icons/md';
function Contact() {
  return (
    <div className="container mx-auto pb-16 ">
      <Heading
        Heading={'Contact With Us'}
        desc={
          "Get in touch with us for any inquiries, support, or collaboration opportunities. We're here to help and look forward to connecting with you. Reach out today for prompt assistance!"
        }
      ></Heading>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="*:bg-gray-50  grid grid-cols-2 *:space-y-1 *:px-6 *:py-8 text-center *:border-gray-300">
            <div className="border-r border-b ">
              <span>
                <LuMapPin className="text-3xl text-blue-800 mx-auto" />
              </span>
              <h1 className="text-xl  font-semibold text-black pt-2">
                Address
              </h1>
              <p className="">
                Mirpur-2 , Dhaka <br /> Road No-323{' '}
              </p>
            </div>
            <div className="border-b">
              <span>
                <IoCallOutline className="text-3xl text-blue-800 mx-auto" />
              </span>
              <h1 className="text-xl  font-semibold text-black pt-2">
                Call Us
              </h1>
              <p>+880 164 *** ****</p>
              <p>+880 164 *** ****</p>
            </div>
            <div className="border-r">
              <span>
                <MdOutlineEmail className="text-3xl text-blue-800 mx-auto" />
              </span>
              <h1 className="text-xl  font-semibold text-black pt-2">
                Email Us
              </h1>
              <p>rrelevator@gmail.com</p>
              <p>rrelevator@gmail.com</p>
            </div>
            <div>
              <span>
                <MdOutlineWatchLater className="text-3xl text-blue-800 mx-auto" />
              </span>
              <h1 className="text-xl  font-semibold text-black pt-2">
                Working Hours
              </h1>
              <p>
                Every Days <br /> 24/7 hours
              </p>
            </div>
          </div>
          <div></div>
        </div>

        <form class=" space-y-6 flex-1 bg-white shadow-differenceCard p-8">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_first_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_last_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="floating_phone"
              id="floating_phone"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_phone"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number (123-456-7890)
            </label>
          </div>

          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full hover:scale-110 transition-all duration-500  px-5 py-2.5 text-center "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
