// Contact.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/common/footer";
import Contacth from "@/components/common/Contacth";
import { document } from "postcss";
import FooterSection from "@/components/sections/FooterSection";
 
const Contact = () => {
    const navigate = useNavigate();
     
    
  
    const handleClick = () => {
      navigate('/about'); 
      // Specify the route you want to navigate to
     
    };
  
    return (
         <>
      <p onClick={handleClick}>Go to about us </p>
         <Contacth/>
         <FooterSection/>
         </>
    );
  };
  
export default Contact;