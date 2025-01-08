import React from 'react';
import { TbAerialLift, TbSettingsSpark } from 'react-icons/tb';
import { RiInstallLine } from 'react-icons/ri';
import {
  MdOutlineEmergencyShare,
  MdPublishedWithChanges,
  MdTrackChanges,
} from 'react-icons/md';
import Heading from '../../../Components/Heading';
import ServiceCard from '../../Home/Service/ServiceCard';
import { IoDiamondOutline } from 'react-icons/io5';
import { TbEyeSpark } from 'react-icons/tb';
import { TbTargetArrow } from 'react-icons/tb';

function OurVisionMission() {
  return (
    <div className="mt-20 ">
      <div className="grid lg:grid-cols-3 ">
        <ServiceCard
          Icon={<IoDiamondOutline />}
          Heading={'Our Values'}
          Desc={
            'At our elevator company, we are committed to quality, safety, and customer satisfaction. We uphold integrity, transparency, and trust in every project we undertake. Innovation and continuous improvement guide our work, ensuring that we provide state-of-the-art solutions. Our team works collaboratively, respecting each individual’s contribution while fostering an environment of accountability and responsibility. We aim to exceed customer expectations, building lasting relationships through reliable service and expertise.'
          }
        ></ServiceCard>
        <div className="sm:border-l sm:border-r">
          <ServiceCard
            Icon={<TbEyeSpark />}
            Heading={'Our Vision'}
            Desc={
              'Our vision is to be the leading provider of cutting-edge elevator systems, recognized for our unwavering commitment to safety, quality, and excellence. We aim to revolutionize vertical transportation by integrating advanced technologies that improve performance, reliability, and efficiency. We envision a future where our products and services are synonymous with innovation, enhancing the lives of those who use them.'
            }
          ></ServiceCard>
        </div>
        <ServiceCard
          Icon={<TbTargetArrow />}
          Heading={'Our Mission'}
          Desc={
            'Our mission is to deliver superior elevator solutions that meet the highest standards of safety, functionality, and design. We strive to provide efficient, sustainable, and cost-effective elevator systems, backed by exceptional installation, maintenance, and repair services. Our goal is to support the vertical mobility needs of buildings, ensuring a smooth and reliable experience for every user while contributing to the long-term success of our clients.'
          }
        ></ServiceCard>
      </div>
    </div>
  );
}

export default OurVisionMission;
