import React from 'react'

function Heading({Heading, desc}) {
return (
  <div className="mx-auto my-12 text-center md:max-w-xl lg:max-w-3xl">
    <h3 className="text-2xl  lg:text-4xl text-center font-bold ml-4">
      {Heading}
    </h3>
    <p className="ml-6 mt-4 text-[#52525c]  text-center">{desc}</p>
  </div>
);
}

export default Heading