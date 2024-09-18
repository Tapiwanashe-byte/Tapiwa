// Home.js
import HeroSection from "@/components/sections/HeroSection";
import ServiceSection from "@/components/sections/ServiceSection";
import VideoPlayerSection from "@/components/sections/VideoPlayerSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import TeamSection from "@/components/sections/TeamSection";
import ContactUs from "@/components/sections/ContactUs";
import Footer from "@/components/common/footer";
import React from "react";
import FooterSection from "@/components/sections/FooterSection";
 

const Home = () => {
  return (
    <>
  

<HeroSection />
        <ServiceSection />
        <VideoPlayerSection />
        <TestimonialSection />
        <TeamSection />
        <ContactUs />

         <FooterSection/>
        </>
  )

};
export default Home;