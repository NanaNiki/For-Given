import React from "react";
import StepContent from "./interface";
import { Parallax } from "react-scroll-parallax";

const content: StepContent = {
  title: "The Acceptance",
  description:
    " Embrace the power of acceptance, dear traveler. Surrender to the truth that the past has shaped you, but it no longer defines you.\nRelease yourself from its grip and find solace in the present moment, where freedom resides.",
  question:
    'Master Chi asks, "Can you recognize the ways in which the past has influenced and shaped you?\n"How does it feel to let go and accept without judgment?"',
};

export default function Step3() {
  return (
    <div className="w-screen h-screen text-center flex flex-col items-center m-auto">
      <Parallax opacity={[0, 1]} rotate={["0deg", "360deg"]}>
        <img
          src="/images/flowers.svg"
          alt="flower"
          className="w-[14%] mx-auto"
        />
      </Parallax>
      <div className="flex flex-row mx-auto w-8/12 justify-between">
        <Parallax opacity={[-0.75, 1]} translateY={[-110, 510]}>
          <img src="/images/flowers.svg" alt="flower" className="w-16 h-16" />
        </Parallax>
        <Parallax opacity={[-0.75, 1]} translateY={[-110, 510]}>
          <img src="/images/flowers.svg" alt="flower" className="w-16 h-16" />
        </Parallax>
      </div>
      <h1 className="text-5xl font-extrabold m-auto">{content.title}</h1>
      <p className="text-center m-auto p-5 text-xl w-8/12">
        {content.description}
      </p>
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
  );
}
