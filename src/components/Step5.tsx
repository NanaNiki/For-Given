import React from "react";
import StepContent from "./interface";
import { Parallax } from "react-scroll-parallax";

const content: StepContent = {
  title: "The Forgiveness ",
  description:
    "Here lies the heart of radical forgiveness – the art of letting go.\nUnderstand that forgiveness does not condone or forget the past, but liberates you from the chains of resentment. Embrace forgiveness as a conscious choice, reclaiming your power and finding liberation.",
  question:
    'Master Chi asks, "What does forgiveness mean to you, and how does it feel to consciously choose it as a path of liberation?"',
};

export default function Step5() {
  return (
    <div className="w-screen h-fit text-center flex flex-col items-center m-auto pt-32">
      <div className="flex flex-row mx-auto w-8/12 justify-between">
        <Parallax opacity={[-0.3, 1]} translateY={[0, 500]}>
          <img src="/images/flowers.svg" alt="flower" className="w-16 h-16" />
        </Parallax>
        <Parallax opacity={[-0.3, 1]} translateY={[0, 500]}>
          <img src="/images/flowers.svg" alt="flower" className="w-16 h-16" />
        </Parallax>
      </div> 
      <h1 className="text-5xl font-extrabold m-auto pt-20">{content.title}</h1>
      <p className="text-center m-auto p-5 text-2xl w-6/12">
        {content.description}
      </p>
      <div className="relative h-fit w-screen flex flex-col items-center justify-center">
        <img src="/images/meditation.svg" alt="meditation figure" className="w-[20%] mx-auto" />
        <div className="absolute">
          <Parallax rotate={["360deg", "0deg"]}>
            <img src="/images/flowers.svg" alt="flower" className="w-[5rem] mt-20" />
          </Parallax>
        </div>
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
