
import React from "react";
import { Fragment} from "react";
import { ReactDOM } from "react";
import "./footer.css";

function Footer(){
return(

<>  <footer className="footer">
        <div className="footer-container">
            <div className="footer-logo">
                <a href="#"></a>
                <img src="/images/Probottlers logo.png" alt="footer logo" height='44' width='147' />
            </div>
            <div className="footer-links">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </div>
            <div className="footer-social">
                <a href="#" className="social-icon"><img src="/images/what.jpg" alt="Whatsapp"/></a>
                <a href="#" className="social-icon"><img src="/images/twit.png" alt="Twitter"/></a>
                <a href="#" className="social-icon"><img src="/images/insta.jpg" alt="Instagram"/></a>
                <a href="#" className="social-icon"><img src="/images/link.png" alt="LinkedIn"/></a>
            </div>
            <div className="footer-newsletter">
                <h4>Subscribe to our Newsletter</h4>
                <form action="#" method="post">
                    <input type="email" name="email" placeholder="Your email address" required/>
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy;2024 Probottlers. All rights reserved.</p>
        </div>
    </footer>
</>
    
);


}



export default Footer;