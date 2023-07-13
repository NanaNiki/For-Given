import React from "react";
import StepContent from "./interface";

const content: StepContent = {
  title: "The Compassion",
  description:
    "Open your heart wide, for compassion is the key to healing. Cultivate empathy and understanding, knowing that each being carries their own burdens and walks their unique path.\nLet compassion flow, nurturing the seeds of forgiveness within.",
  question:
    'Master Chi asks, "How can you extend compassion and kindness to yourself and others?\n"What does it feel like to offer understanding and forgiveness?"',
};

export default function Step4() {
  return (
    <div className="w-screen h-screen text-center flex flex-col items-center m-auto">
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
