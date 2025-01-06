import React from 'react'
import Heading from '../../../Components/Heading'
import LiftTypeCard from './LiftTypeCard';

function LiftType() {
  return (
    <div className="mt-40 container mx-auto">
      <Heading
        Heading={'Elevators'}
        desc={
          'Elevators come in various types, including Passenger, Home, Car, Capsule elevators etc. each designed for different building heights, capacities, and efficiency requirements, ensuring smooth vertical transportation.'
        }
      ></Heading>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-8  '>
        <LiftTypeCard name={'Home'} image={'/lift.jpg'}></LiftTypeCard>
        <LiftTypeCard name={'Car'} image={'/car.jpg'}></LiftTypeCard>
        <LiftTypeCard image={'/capsule.jpg'} name={'Capsule'}></LiftTypeCard>
        <LiftTypeCard name={'Passenger'} image={'/passenger.jpg'}></LiftTypeCard>
       
      </div>
    </div>
  );
}

export default LiftType