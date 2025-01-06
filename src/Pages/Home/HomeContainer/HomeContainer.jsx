import React from 'react'
import Banner from '../Banner/Banner'
import Statistics from '../Statistics/Statistics'
import Service from '../Service/Service'
import LiftType from '../LiftType/LiftType'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import FAQ from '../FAQ/FAQ'
import Contact from '../Contact/Contact'
import WhatMakesUsDifference from '../WhatMakesUsDifference/WhatMakesUsDifference'
import Testimonials from '../Testimonials/Testimonials'

function HomeContainer() {
  return (
    <div>
      <Banner></Banner>
      <Statistics></Statistics>

      <LiftType></LiftType>
      <Service></Service>
      <WhyChooseUs></WhyChooseUs>
      <WhatMakesUsDifference></WhatMakesUsDifference>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
      <Contact></Contact>
    </div>
  );
}

export default HomeContainer