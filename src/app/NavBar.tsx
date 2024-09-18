"use client";
 
  
import React from 'react';
 
import MainButton from '@/components/common/MainButton';
 
import { useState } from "react";
import { X } from "lucide-react";
 
 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Heading/Home';
import About from './Heading/About';
import Contact  from './Heading/Contact';
import NavBa from "./Heading/NavBa";
import { Navigate } from "react-router-dom";
import NotFound from "./Heading/NotFound";
import Products from './Heading/Products';
import CorporateSocialResponsibility from './Heading/CorporateSocialResponsibility';

function NavBar() {

  return (
  
   <Router>
      <NavBa/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/corporatesocialresponsibility" element={< CorporateSocialResponsibility/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        {/* Redirect example */}
        <Route path="/old-contact" element={<Navigate to="/contact" />} />
      </Routes>
    </Router>

  );
}

export default NavBar;

