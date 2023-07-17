import React from "react";
import StepContent from "./interface";
import { Parallax } from "react-scroll-parallax";

const content: StepContent = {
  title: "The Liberation",
  description:
    "As we reach the culmination of our journey, envision yourself standing atop a magnificent mountaintop, witnessing the majestic sunset.\nFeel the weight lift from your shoulders as forgiveness permeates your being.",
  question:
    'Master Chi asks, "Can you imagine the immense liberation you feel as you let go of resentment and step into the vast expanse of inner peace?"',
  additional:
    "You are free, dear traveler, free to embrace the boundless expanse of inner peace and renewed purpose.",
};

export default function Step6() {
  return (
    <div className="w-screen h-fit text-center flex flex-col items-center m-auto">
      <div className="sticky flex flex-row mt-20">
        <Parallax translateX={[100, -30]}>
          <img src="/images/cloudpink.svg" alt="cloud pink" className="w-[35%]" />
        </Parallax>
        <Parallax translateX={[-100, 100]}>
          <img
            src="/images/cloudpink.svg"
            alt="cloud pink"
            className="w-[35%] ms-[50%]"
          />
        </Parallax>
      </div>
      <h1 className="text-5xl font-extrabold m-auto pt-20">{content.title}</h1>
      <p className="text-center m-auto p-5 mb-8 text-2xl w-6/12">
        {content.description}
      </p>
      <Parallax translateX={[100, 1]}>
          <img src="/images/birds.svg" alt="birds" className="w-[25%]" />
        </Parallax>
      <img src="/images/garden.svg" alt="garden" className="h-72" />
      <div className="flex flex-col items-center">
        <img
          src="/images/question.svg"
          alt="question background"
          className="w-[39%] absolute -mt-12"
        />
        <span className="text-center m-auto text-2xl w-4/12">
          {content.question}
        </span>
      </div>
      <Parallax scaleX={[1, 1.15]}>
        <p className="text-center m-auto px-5 pt-32 text-2xl w-6/12">
          {content.additional}
        </p>
      </Parallax>
    </div>
  );
}
