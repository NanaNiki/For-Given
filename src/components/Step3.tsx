import React from "react";
import StepContent from "./interface";
import { Parallax } from "react-scroll-parallax";

const content: StepContent = {
  title: "The Acceptance",
  description:
    " Embrace the power of acceptance, dear traveler. Surrender to the truth that the past has shaped you, but it no longer defines you.\nRelease yourself from its grip and find solace in the present moment, where freedom resides.",
  question:
    'Master Chi asks, "Can you recognize the ways in which the past has influenced and shaped you?\n"How does it feel to let go and accept it without judgment?"',
};

export default function Step3() {
  return (
    <div className="w-screen h-fit text-center flex flex-col items-center m-auto">
      <div className="absolute">
        <Parallax opacity={[0, 1]} translateX={[-100, 200]}>
          <div className="w-[30rem] h-1 bg-pink-300 rounded-full mt-[4.5rem]" />
        </Parallax>
      </div>
      <Parallax translateX={[100, -100]}>
        <img src="/images/moonlookin.svg" alt="traveler" className="w-[60%]" />
      </Parallax>
      <h1 className="text-5xl font-extrabold m-auto pt-8">{content.title}</h1>
      <p className="text-center m-auto p-5 text-2xl w-6/12">
        {content.description}
      </p>
      <div className="flex flex-col items-center my-10">
        <Parallax rotate={["0deg", "560deg"]} opacity={[1, 0]}>
          <img
            src="/images/spiral.svg"
            alt="spiral"
            className="w-[65%] mx-auto"
          />
        </Parallax>
        <img
          src="/images/accept.svg"
          alt="accepting hands"
          className="w-[40%] mx-auto absolute -mt-8"
        />
      </div>
      <div className="flex flex-col items-center pt-10">
        <img
          src="/images/question.svg"
          alt="question background"
          className="w-[39%] absolute -mt-12"
        />
        <span className="text-center m-auto text-2xl w-4/12">
          {content.question}
        </span>
      </div>
    </div>
  );
}
