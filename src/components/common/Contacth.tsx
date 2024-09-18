"use client"; 
 
import Header from "./Header";
import { Input } from "../ui/input";
import MainButton from "./MainButton";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contacthx.css";


const Contacth: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_4bweews', 
          'template_ijbneim', 
          form.current, 
          'j59pc-f6AjdCmkeiE'
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.error("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <>
   
    <div className="contact_us_2">
  <div className="responsive-container-block big-container">
    <div className="blueB">
    </div>
    <div className="responsive-container-block container">
      <form className="form-box" ref={form} onSubmit={sendEmail}>
        <div className="container-block form-wrapper">
          <p className="text-blk contactus-head">
            Get in Touch
          </p>
          <p className="text-blk contactus-subhead">
            Nunc erat cursus tellus gravida.
          </p>
          <div className="responsive-container-block">
            <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
              <p className="text-blk input-title">
                FIRST NAME
              </p>
              <input className="input" id="ijowk" name="from_name" placeholder="Please enter first name..." required/>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <p className="text-blk input-title">
                LAST NAME
              </p>
              <input className="input" id="indfi" name="last_name" placeholder="Please enter last name..."required/>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <p className="text-blk input-title">
                EMAIL
              </p>
              <input className="input" id="ipmgh" name="email" placeholder="Please enter email..."required/>
            </div>
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <p className="text-blk input-title">
                PHONE NUMBER
              </p>
              <input className="input" id="imgis" name="phoneNumber" placeholder="Please enter phone number..."required/>
            </div>
            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i">
              <p className="text-blk input-title">
                WHAT DO YOU HAVE IN MIND
              </p>
              <textarea className="textinput" id="i5vyy" name="message"placeholder="Please enter query..."required></textarea>
            </div>
          </div>
        
          <input className="submit-btn"  type="submit" value=" Send" />
        </div>
        <div className="social-media-links">
          <a href="#" id="ix94i-2">
            <img className="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"/>
          </a>
          <a href="#">
            <img className="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"/>
          </a>
          <a href="#">
            <img className="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png"/>
          </a>
          <a href="#" id="izldf-2">
            <img className="link-img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"/>
          </a>
        </div>
      </form>
    </div>
  </div>
</div>


    
















    
    </>
  );
};

export default Contacth;