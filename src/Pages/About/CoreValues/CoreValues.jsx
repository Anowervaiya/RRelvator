import React from 'react'
import keepImage from '/keep.avif'; 
import { GiDiceTarget } from 'react-icons/gi';

import CoreValueCard from './CoreValueCard';
import Heading from '../../../Components/Heading';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { MdAutoGraph } from 'react-icons/md';
import { IoPerson } from 'react-icons/io5';

function CoreValues() {
  return (
    <div>
      <div className="  text-white   ">
        <div
          className=" w-full   bg-cover bg-fixed bg-no-repeat"
          style={{ backgroundImage: `url(${keepImage})` }}
        >
          {' '}
          <div className="p-4 pb-32">
            <Heading Heading={'Our Core Values'}></Heading>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4 max-w-[1440px] mx-auto lg:gap-12 lg:px-16">
              <CoreValueCard
                Icon={<GiDiceTarget />}
                Heading={'Innovation'}
                Desc={
                  'Innovation drives our success. We embrace creativity, curiosity, and forward-thinking approaches to digital marketing. We continuously explore new technologies, trends, and methodologies to deliver innovative solutions'
                }
              ></CoreValueCard>
              <CoreValueCard
                Icon={<AiOutlineFileSearch />}
                Heading={'Transparency'}
                Desc={
                  'Foster open communication and honesty with clients and team members. Provide clear insights into strategies, processes, and outcomes, ensuring trust and accountability at every stage of collaboration'
                }
              ></CoreValueCard>
              <CoreValueCard
                Icon={<MdAutoGraph />}
                Heading={'Results-Driven'}
                Desc={
                  "Focus on delivering measurable results that positively impact clients' businesses. Prioritize data-driven decision-making, analytics, and optimization to achieve tangible outcomes and ROI for clients."
                }
              ></CoreValueCard>
              <CoreValueCard
                Icon={<IoPerson />}
                Heading={'Client-Centricity'}
                Desc={
                  'Put clients at the heart of everything you do. Strive to understand their unique needs, goals, and challenges, and tailor marketing strategies accordingly. Build long-term partnerships through exceptional service'
                }
              ></CoreValueCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreValues