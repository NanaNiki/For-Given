import React from "react";
import StepContent from "./interface";

const content: StepContent = {
  title: "The Liberation",
  description:
    "As we reach the culmination of our journey, envision yourself standing atop a magnificent mountaintop, witnessing the majestic sunset.\nFeel the weight lift from your shoulders as forgiveness permeates your being.\nYou are free, dear traveler, free to embrace the boundless expanse of inner peace and renewed purpose.",
  question:
    'Master Chi asks, "Can you imagine the immense liberation you feel as you let go of resentment and step into the vast expanse of inner peace?"',
};

export default function Step6() {
  return (
    <div className="w-screen h-fit text-center flex flex-col items-center m-auto">
      
      <h1 className="text-5xl font-extrabold m-auto pt-20">{content.title}</h1>
      <p className="text-center m-auto p-5 text-2xl w-6/12">
        {content.description}
      </p>
      <div className="flex flex-col items-center pt-10">
        <img
          src="/images/question.svg"
          alt="eye"
          className="w-[39%] absolute -mt-12"
        />
        <span className="text-center m-auto text-2xl w-4/12">
          {content.question}
        </span>
      </div>
    </div>
  );
}
