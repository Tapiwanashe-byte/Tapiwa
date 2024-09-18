 
import FooterSection from '@/components/sections/FooterSection';
import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'lucide-react';

function Products() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleDropdown} className="dropdown-btn">
        Links
      </button>
      <div className="dropdown-content">
        <ul>
        <li> home</li> 

        <li><a href="#services">Services</a></li>

        <li><a href="#contact">Contact</a></li>
         
        </ul>
      </div>
    </div>
    
    
    

    <FooterSection/>
    </>
  );
}

export default Products;
