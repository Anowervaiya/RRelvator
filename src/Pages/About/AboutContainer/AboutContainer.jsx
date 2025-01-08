import React from 'react'
import AboutBanner from '../AboutBanner/AboutBanner'
import IndustryEstablish from '../IndustryEstablish/IndustryEstablish';
import KeepWithUs from '../KeepWithUs/KeepWithUs';
import OurVisionMission from '../OurVision/OurVision';
import Statistics from '../../Home/Statistics/Statistics';
import AboutStatistics from '../AboutStatistics/AboutStatistics';
import CoreValues from '../CoreValues/CoreValues';
import Contact from '../../Home/Contact/Contact';
import Testimonials from '../../Home/Testimonials/Testimonials';

function AboutContainer() {
  return (
    <div className="min-h-screen">
      <AboutBanner></AboutBanner>
      <div className=" max-w-[1440px] mx-auto px-4">
        <IndustryEstablish></IndustryEstablish>
        <KeepWithUs></KeepWithUs>
        <OurVisionMission></OurVisionMission>
      </div>
      <Testimonials></Testimonials>
      <AboutStatistics></AboutStatistics>
      <CoreValues></CoreValues>
      
      <div className=" max-w-[1440px] mx-auto px-4">
        <Contact></Contact>
      </div>
    </div>
  );
}

export default AboutContainer