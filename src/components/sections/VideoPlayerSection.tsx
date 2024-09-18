import React from "react";
import MainButton from "../common/MainButton";

function VideoPlayerSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-8 mt-[11.31rem]">
      <div>
        <p className="text-lightBlue font-bold text-2xl ">
          The Taste Of Magic That Rocks Your World
        </p>
        <p className="text-customLightGray text-[1.2rem] mt-4 mb-8">
          Startup Framework contains components and complex blocks which can
          easily be integrated into almost any design.{" "}
        </p>
        <MainButton
          text="Explore"
          classes="!h-[3.01544rem] hover:bg-white w-[8.2925rem] text-lightBlue font-bold text-[1rem] rounded-[6.25rem] border-[4px] border-[#EBEAED] bg-white shadow-none"
        />
      </div>
      <div>
        <video width='740' controls>
          <source src="/images/fizzi.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default VideoPlayerSection;
