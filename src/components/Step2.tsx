import React from "react";
import StepContent from "./interface";

const content : StepContent = {
  title: "The Reflection",
  description: "Close your eyes and find yourself in a tranquil garden adorned with delicate cherry blossoms.\nLet your thoughts and emotions arise, allowing the source of your pain to reveal itself.\nReflect upon the depth of your hurt, acknowledging the weight of resentment you carry.",
  question: 'Master Chi asks, "What specific events or experiences have caused you pain, and how do they affect you now?"',
}

export default function Step2() {
  return (
    <div className="w-screen h-screen text-center flex flex-col items-center m-auto">
      <h1 className="text-5xl font-extrabold m-auto">{content.title}</h1>
      <p  className="text-center m-auto p-5 text-xl w-8/12">
       {content.description}
      </p>
      <span>
      {content.question}
      </span>
    </div>
  );
}
