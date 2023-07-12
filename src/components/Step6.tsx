import React from "react";
import StepContent from "./interface";

const content: StepContent = {
  title: "The Liberation",
  description:
    " As we reach the culmination of our journey, envision yourself standing atop a magnificent mountaintop, witnessing the majestic sunset.\nFeel the weight lift from your shoulders as forgiveness permeates your being.\nYou are free, dear traveler, free to embrace the boundless expanse of inner peace and renewed purpose.",
  question:
    ' Master Chi asks, "Can you imagine the immense liberation you feel as you let go of resentment and step into the vast expanse of inner peace?"',
};

export default function Step6() {
  return (
    <div className="w-screen h-screen text-center flex flex-col items-center m-auto">
      <h1 className="text-5xl font-extrabold m-auto">{content.title}</h1>
      <p className="text-center m-auto p-5 text-xl w-8/12">
        {content.description}
      </p>
      <span>{content.question}</span>
    </div>
  );
}
