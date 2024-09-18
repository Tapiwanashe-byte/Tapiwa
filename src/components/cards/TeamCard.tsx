import React from "react";
import { Separator } from "@/components/ui/separator";

interface IProps {
  imageUrl: string;
  name: string;
  profession: string;
}

function TeamCard({ imageUrl, name, profession }: IProps) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center border-[4px] border-[#EBEAED] rounded-t-[1rem] py-[3rem]">
        <div>
          <img
            src={imageUrl}
            alt="team member photo"
            className="w-[7.5rem] h-[7.5rem] rounded-full"
          />
        </div>
        <p className="text-lightBlue font-bold text-[1.2rem] my-6">{name}</p>
        <p className="text-darkBlue font-bold opacity-[0.3]">{profession}</p>
      </div>

      <div className="flex justify-around items-center h-[3.6875rem] border-[4px] border-[#EBEAED] border-t-0  rounded-b-[1rem]">
        <div>
         <a href="https://www.facebook.com/pages/Probottlers%20Pvt%20Ltd/171465922725479/"> <img   src="/images/x_icon.png" alt="social icon" /></a> 
        </div>
        <Separator orientation="vertical" color="#EBEAED" className="w-[3px]" />
        <div>
          
          <a href="https://www.facebook.com/pages/Probottlers%20Pvt%20Ltd/171465922725479/"> <img src="/images/facebook_icon.png" alt="social icon" /></a>
        </div>
        <Separator orientation="vertical" color="blue" className="w-[3px]" />
        <div>
           
          <a href="https://www.facebook.com/pages/Probottlers%20Pvt%20Ltd/171465922725479/"> <img src="/images/dribble_icon.png" alt="social icon" /></a>
          
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
