import React from 'react'

function LiftTypeCard({ name, image }) {
  return (
    <div className="shadow-service relative ">
      <img className=" w-full h-[250px] lg:h-[200px]  " src={image} alt="" />
      <div className="py-3">
        <h1 className="text-blue-500 font-bold text-xl  w-full text-center font-serif">
          {name} Elevator
        </h1>

        {/* <p className='text-center'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          reiciendis?
        </p> */}
      </div>
    </div>
  );
}

export default LiftTypeCard