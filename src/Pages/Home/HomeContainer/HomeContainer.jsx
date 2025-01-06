import React from 'react'
import Banner from '../Banner/Banner'
import Statistics from '../Statistics/Statistics'
import Service from '../Service/Service'
import LiftType from '../LiftType/LiftType'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'

function HomeContainer() {
  return (
    <div>
      <Banner></Banner>
      <Statistics></Statistics>
      <Service></Service>
      <WhyChooseUs></WhyChooseUs>
      <LiftType></LiftType>
    </div>
  )
}

export default HomeContainer