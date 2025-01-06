import React from 'react';
import StatisticsCard from './StatisticsCard';
import { FaUsers } from 'react-icons/fa6';
import { GiLift } from 'react-icons/gi';
import { PiBuildingApartmentBold, PiBuildingApartmentLight } from 'react-icons/pi';

function Statistics() {
  return (
    <div className="relative z-30">
      <div className="  absolute -top-14    w-full ">
        <div className="flex justify-around items-center gap-3 container mx-auto ">
          <StatisticsCard
            Icon={<FaUsers />}
            Number={'500k+'}
            Desc={'Registered User'}
          ></StatisticsCard>
          <StatisticsCard
            Icon={<GiLift />}
            Number={'960k+'}
            Desc={'Elevator Sold'}
          ></StatisticsCard>
          <StatisticsCard
            Icon={<PiBuildingApartmentBold/>}
            Number={'70k+'}
            Desc={'Building Partners'}
          ></StatisticsCard>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
