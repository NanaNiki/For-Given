import React from "react";
import StepContent from "./interface";
import { Parallax } from "react-scroll-parallax";

const content: StepContent = {
  title: "The Awakening",
  description:
    "You have taken the first step towards liberation, recognizing the burden of suffering and the yearning for release.\nUnderstand that your journey begins here, with the spark of awakening within your soul.",
  question:
    'Master Chi asks, "What is the deepest desire that drives you towards liberation?"',
};

export default function Step1() {
  return (
    <>
      <div className="w-10/12 mx-auto absolute pt-24">
        <Parallax translateX={[120, 0]} opacity={[0, 1]}>
          <img
            src="/images/cloud.svg"
            alt="awaken"
            className="w-[27%] -mt-28"
          />
        </Parallax>
      </div>
      <div className="w-screen h-fit text-center flex flex-col py-20">
        <h1 className="text-5xl font-extrabold pt-32">{content.title}</h1>
        <p className="text-center mx-auto text-2xl w-6/12 p-5 mb-16">
          {content.description}
        </p>
        <div className="flex flex-col">
          <div className="w-9/12 flex flex-row justify-between mx-auto pe-6">
            <img src="/images/eyel.svg" alt="eye" className="w-[35%]" />
            <img src="/images/eyer.svg" alt="eye" className="w-[35%]" />
          </div>
          <Parallax translateY={[-100, 10]}>
            <div className="w-10/12 flex flex-row justify-evenly mx-auto">
              <div className="bg-color rounded-full h-[7.5rem] w-[8rem] blur-sm me-60"></div>
              <div className="bg-color rounded-full h-[7.5rem] w-[8rem] blur-sm"></div>
            </div>
          </Parallax>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/images/question.svg"
            alt="eye"
            className="w-[35%] absolute -mt-16"
          />
          <span className="text-center m-auto text-2xl w-4/12">
            {content.question}
          </span>
        </div>
      </div>
    </>
  );
}
