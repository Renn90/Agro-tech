import { useEffect } from 'react';
import Cards from '../components/Cards';
import Hero from '../components/Hero';
import Why from '../components/Why';
import Iframe from '../components/Iframe';
import Provisions from '../components/Provisions';
import ServicesP from '../components/ServicesP';
import QandA from '../components/QandA';
import Specialist from '../components/Specialist';
import Testimonial from '../components/Testimonial';
import Pricing from '../components/Pricing';

const Home = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <>
       <Hero />
       <Cards />
       <Why />
       <Iframe />
       <Provisions />
       <ServicesP />
       <QandA />
       <Specialist home={true}/>
       <Testimonial />
       <Pricing />
    </>
  )
}

export default Home
