// Navbar.js


"use client";
 
  
 

 
import MainButton from '@/components/common/MainButton';
 
import React, { useState, useEffect } from 'react';
import { X } from "lucide-react";

import { Link } from "react-router-dom";
import "./NavBa.css";

const NavBa = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
const mycontact=()=>{
<h1>  successful</h1>

}


const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSmall(true);
      } else {
        setIsSmall(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  


  return (
    <>
    
<div  className={isSmall ? 'header small' : 'header'}>
       
<div className="md:sticky md:top-0   md:shadow-none z-20">
   {/* DESKTOP */}
   <div className=" hidden lg:block animate-in fade-in zoom-in bg-white p-4">
     <div className="flex justify-between md:mx-[5rem] items-center">
       <div>
         <img src="/images/Probottlers logo.png" alt="logo" height='44' width='147' />
       </div>

       <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
         <p
           className={`hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray`}
         >
          <Link to="/">Home</Link>
         </p>
         <p
           className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
         >
            <Link to="/about">About Us</Link>
         </p>
         <p
           className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
         >
          <Link to="/products">Products</Link>
         </p>
         <p
           className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
         >
          <Link to="/corporatesocialresponsibility">Corporate Social Responsibility</Link>   
         </p>
       </div>
       <div className="flex items-center gap-[40px] select-none">

      
       <Link to="/contact"><MainButton text="Contact Us" classes="shadow-none"/> </Link> 
            

   
       </div>
       {/* <div className="flex items-center gap-[40px] select-none">
   <p
     className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
   >
     Login
   </p>
   <MainButton text="Sign up" classes="shadow-none" />
 </div> */}
     </div>
   </div>
   {/* MOBILE */}
   <div
     className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in  ${menu ? " bg-primary py-2" : ""} `}
   >
     <div className="flex justify-between mx-[10px]">
       <div className="flex gap-[50px] text-[16px] items-center select-none">
         <img
           src="/images/Probottlers logo.png"
           alt="logo"
           className="w-[7rem]" />
       </div>
       <div className="flex items-center gap-[40px]">
         {menu ? (
           <X
             className="cursor-pointer animate-in fade-in zoom-in text-black"
             onClick={toggleMenu} />
         ) : (
           <img
             src="/svgs/hamburger.svg"
             alt="logo"
             className="cursor-pointer animate-in fade-in zoom-in"
             onClick={toggleMenu} />
         )}
       </div>
     </div>
     {menu ? (
       <div className="my-8 select-none animate-in slide-in-from-right">
         <div className="flex flex-col gap-8 mt-8 mx-4">
           <p
             className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
           >
             Home
           </p>
           <p
             className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
           >
             About Us
           </p>
           <p
             className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
           >
             Our App
           </p>
           <p
             className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
           >
             Contacts
           </p>

           <div className="flex flex-col gap-[40px] select-none">
             <MainButton text="Sign up" classes="shadow-none" />
           </div>

           {/* <div className="flex flex-col gap-[40px] select-none">
           <p
             className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
           >
             Login
           </p>
           <MainButton text="Sign up" classes="shadow-none" />
         </div> */}
         </div>
       </div>
     ) : (
       <div></div>
     )}
   </div>
 </div>
 
    </div>
    </>

































































































  );
};

export default NavBa;