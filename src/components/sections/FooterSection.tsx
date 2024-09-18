import React from "react";
import { Separator } from "../ui/separator";

function FooterSection() {
  return (
    <section className="flex flex-col gap-[1.9rem] w-full mt-[10.44rem]">
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div>
          <img src="/images/Probottlers logo.png" alt="footer logo" height='44' width='147' />
        </div>
        <div className="text-lightBlue text-[1rem] font-serif">
          © 2024 Probottlers. All rights reserved.
        </div>
        <div className="flex gap-4 pb-[2.56rem]">
          <p className="text-lightBlue text-[1rem]">Portfolio</p>
          <p className="text-lightBlue text-[1rem]">How it Works</p>
          <p className="text-lightBlue text-[1rem]">Pricing</p>
          <p className="text-lightBlue text-[1rem]">About</p>
          <p className="text-lightBlue text-[1rem]">Login</p>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
