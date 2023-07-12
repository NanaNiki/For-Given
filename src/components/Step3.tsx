import React from "react";
import StepContent from "./interface";

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
      <h1 className="text-5xl font-extrabold m-auto">{content.title}</h1>
      <p className="text-center m-auto p-5 text-xl w-8/12">
        {content.description}
      </p>
      <span>{content.question}</span>
    </div>
  );
}
