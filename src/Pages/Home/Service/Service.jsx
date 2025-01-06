import React from 'react'
import Heading from '../../../Components/Heading'
import ServiceCard from './ServiceCard';
import { TbAerialLift, TbSettingsSpark } from 'react-icons/tb';
import { RiInstallLine } from 'react-icons/ri';
import { MdOutlineEmergencyShare, MdPublishedWithChanges, MdTrackChanges } from 'react-icons/md';

function Service() {
  return (
    <div className="mt-20 container mx-auto">
      <Heading
        Heading={'Services'}
        desc={
          'We provide reliable, innovative, and safe elevator solutions tailored to residential, commercial, and industrial needs, ensuring seamless vertical transportation with top-notch maintenance and customer service.'
        }
      />

      <div className="grid grid-cols-3">
        <div className=" sm:border-b">
          <ServiceCard
            Icon={<TbSettingsSpark />}
            Heading={'Annual Maintenance'}
            Desc={
              'We provide comprehensive annual maintenance services for elevators, ensuring optimal performance, safety, and longevity. Our expert technicians handle inspections, repairs, and upgrades efficiently for smooth operation.'
            }
          ></ServiceCard>
        </div>
        <div className="sm:border-r sm:border-b  sm:border-l ">
          <ServiceCard
            Icon={<RiInstallLine />}
            Heading={'Installation'}
            Desc={
              'We provide professional elevator installation services, offering customized solutions for residential, commercial, and industrial buildings, ensuring safety, efficiency, and smooth operation for every lift system.'
            }
          ></ServiceCard>
        </div>
        <div className="sm:border-b">
          <ServiceCard
            Icon={<MdTrackChanges />}
            Heading={'Modification'}
            Desc={
              'Specializing in elevator modification services, we enhance and upgrade existing systems for improved performance, safety, and efficiency to meet evolving needs and regulations.'
            }
          ></ServiceCard>
        </div>
        <ServiceCard
          Icon={<MdPublishedWithChanges />}
          Heading={'Repair & Services'}
          Desc={
            'We provide expert elevator repair and maintenance services, ensuring smooth operation, safety, and reliability. Our team handles repairs, upgrades, and routine maintenance for all elevator models.'
          }
        ></ServiceCard>
        <div className="sm:border-l sm:border-r">
          <ServiceCard
            Icon={<TbAerialLift />}
            Heading={'Elevator Modernization'}
            Desc={
              'We provide comprehensive elevator modernization services to upgrade existing systems, improving efficiency, safety, and compliance with the latest industry standards, ensuring a smoother ride and better performance.'
            }
          ></ServiceCard>
        </div>
        <ServiceCard
          Icon={<MdOutlineEmergencyShare />}
          Heading={'Emergency Services'}
          Desc={
            'Our emergency elevator services ensure prompt response and resolution of any elevator malfunction or breakdown, minimizing downtime and ensuring safety for passengers with our reliable, 24/7 support.'
          }
        ></ServiceCard>
      </div>
    </div>
  );
}

export default Service