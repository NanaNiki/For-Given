import React from "react";
import StepContent from "./interface";
import { Parallax } from "react-scroll-parallax";

const content: StepContent = {
  title: "The Reflection",
  description:
    "Close your eyes and find yourself in a tranquil garden adorned with delicate cherry blossoms.\nLet your thoughts and emotions arise, allowing the source of your pain to reveal itself.\nReflect upon the depth of your hurt, acknowledging the weight of resentment you carry.",
  question:
    'Master Chi asks, "What specific events or experiences have caused you pain, and how do they affect you now?"',
};

export default function Step2() {
  return (
    <div className="w-screen h-fit text-center flex flex-col items-center m-auto py-10">
      <div className="w-fit absolute right-0">
        <Parallax translateX={[-120, -10]} opacity={[0, 1]}>
          <img src="/images/scrible.svg" alt="scrible" className="w-56" />
        </Parallax>
      </div>
      <h1 className="text-5xl font-extrabold m-auto pt-24">{content.title}</h1>
      <p className="text-center m-auto p-5 text-2xl w-6/12">
        {content.description}
      </p>
      <Parallax translateX={[-100, -50]}>
        <img src="/images/garden.svg" alt="garden" className="h-56" />
      </Parallax>{" "}
      <div className="flex flex-col items-center pt-10">
        <img
          src="/images/question.svg"
          alt="eye"
          className="w-[35%] absolute -mt-10"
        />
        <span className="text-center m-auto text-2xl w-4/12">
          {content.question}
        </span>
      </div>
    </div>
  );
}
