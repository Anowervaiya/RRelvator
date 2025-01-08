import React from 'react';
import { FaUsers } from 'react-icons/fa6';
import { GiLift } from 'react-icons/gi';
import {
  PiBuildingApartmentBold,
  PiBuildingApartmentLight,
} from 'react-icons/pi';
import StatisticsCard from '../../Home/Statistics/StatisticsCard';
import Heading from '../../../Components/Heading';
import { BiTargetLock } from 'react-icons/bi';
function AboutStatistics() {
  return (
    <div className=" bg-gray-100 py-16 my-12">
      <div className="     w-full ">
        <Heading Heading={'What We Are..'}></Heading>
        <div className="flex flex-col md:flex-row justify-around items-center gap-3 container mx-auto ">
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
            Icon={<PiBuildingApartmentBold />}
            Number={'70k+'}
            Desc={'Building Partners'}
          ></StatisticsCard>
          <StatisticsCard
            Icon={<BiTargetLock />}
            Number={'15y+'}
            Desc={'Year of Experience'}
          ></StatisticsCard>
        </div>
      </div>
    </div>
  );
}

export default AboutStatistics;
