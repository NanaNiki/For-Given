import React from "react";
import StepContent from "./interface";

const content: StepContent = {
  title: "The Forgiveness ",
  description:
    "Forgiveness Here lies the heart of radical forgiveness – the art of letting go.\nUnderstand that forgiveness does not condone or forget the past, but liberates you from the chains of resentment. Embrace forgiveness as a conscious choice, reclaiming your power and finding liberation.",
  question:
    ' Master Chi asks, "What does forgiveness mean to you, and how does it feel to consciously choose it as a path of liberation?"',
};

export default function Step5() {
  return (
    <div className="w-screen h-fit text-center flex flex-col items-center m-auto">
      <h1 className="text-5xl font-extrabold m-auto pt-20">{content.title}</h1>
      <p className="text-center m-auto p-5 text-2xl w-6/12">
        {content.description}
      </p>
      <div className="flex flex-col items-center pt-10">
        <img
          src="/images/question.svg"
          alt="eye"
          className="w-[39%] absolute -mt-12"
        />
        <span className="text-center m-auto text-2xl w-4/12">
          {content.question}
        </span>
      </div>
    </div>
  );
}
