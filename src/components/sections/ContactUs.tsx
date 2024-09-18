"use client"; 
 
import Header from "../common/Header";
import { Input } from "../ui/input";
import MainButton from "../common/MainButton";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contactus.css';
import { ChevronsLeft } from "lucide-react";

const ContactUs: React.FC = () => {
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
              
            document.write("SUCCESS!");
          },
          (error) => {
            console.error("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <>
    
<section className="mt-[9rem]">
      <Header title="Suggestion Box" subtitle="Help Us Improve Our Products" />
      <div className="flex flex-col md:flex-row  items-center mt-8 md:mt-[3.31rem]">
        <div>
          <img
            src="/images/newsletter_large_icon.png"
            alt="large envelop image"
            className="w-[10rem] md:w-full"
          />
        </div>
        <div>
          <p className="mb-[1.44rem] text-normal font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <form ref={form} onSubmit={sendEmail}>
          <label></label>
        <textarea name="message" placeholder="Your Suggestion here..." required> </textarea>
        
        <input type="submit" value="Drop a Suggestion" />
          </form>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactUs;
