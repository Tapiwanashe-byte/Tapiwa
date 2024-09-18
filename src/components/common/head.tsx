import React from "react";
import { ReactDOM } from "react";
import "./head.css";
import Blog from "./blog";


function  Head(){

    return(
<>
    <header>
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#" className="navbar-logo"><img src="/images/Probottlers logo.png" alt="footer logo" height='44' width='147' /></a>
                <div className="navbar-search">
                    <input type="text" placeholder="Search..." id="search-bar"/>
                    <button id="search-btn">Search</button>
                </div>
                <ul className="navbar-menu">
                    <li><a href="#">Home</a></li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle">About</a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Our Story</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                           </ul>
                           </li>
                             <li className="dropdown">
                            <a href="#" className="dropdown-toggle">Services</a>
                             <ul className="dropdown-menu">
                            <li><a href="#">Consulting</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Design</a></li>
                        </ul>
                        </li>
                         <li><a href="#">Portfolio</a></li>
                         <li><a href="./blog.tsx">Blog</a></li>
                         <li><a href="mailto:reception@probottlers.co.zw">Contact</a></li>
                    
                    
                           </ul>
                
                          <div className="navbar-toggle">
                             <span className="bar"></span>
                              <span className="bar"></span>
                             <span className="bar"></span>
                </div>
            </div>
        </nav>
    </header>

    
    <div className="mobile-menu">
        <ul className="mobile-menu-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>

    <script src="navbar-scripts.js"></script>


</>


    );
}
export default Head;