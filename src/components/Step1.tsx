import React from "react";
import StepContent from "./interface";

const content: StepContent = {
  title: "The Awakening",
  description:
    "You have taken the first step towards liberation, recognizing the burden of suffering and the yearning for release.\nUnderstand that your journey begins here, with the spark of awakening within your soul.",
  question:
    'Master Chi asks, "What is the deepest desire that drives you towards liberation?"',
};

export default function Step1() {
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
