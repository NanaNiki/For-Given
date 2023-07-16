import React from "react";
import StepContent from "./interface";
import { Parallax } from "react-scroll-parallax";

const content: StepContent = {
  title: "The Compassion",
  description:
    "Open your heart wide, for compassion is the key to healing. Cultivate empathy and understanding, knowing that each being carries their own burdens and walks their unique path.\nLet compassion flow, nurturing the seeds of forgiveness within.",
  question:
    'Master Chi asks, "How can you extend compassion and kindness to yourself and others?\n"What does it feel like to offer understanding and forgiveness?"',
};

export default function Step4() {
  return (
    <div className="w-screen h-fit text-center flex flex-col items-center mx-auto">
      <div className="flex flex-col items-center -mt-10 pb-8">
        <Parallax translateX={[-100, 100]}>
          <img src="/images/birds.svg" alt="birds" className="w-[85%] mt-32" />
        </Parallax>
        <div className="absolute mt-12">
          <Parallax translateX={[100, -30]} opacity={[0.5, 1]}>
            <img
              src="/images/cloudpink.svg"
              alt="awaken"
              className="w-[25%] ms-[50%]"
            />
            <img
              src="/images/cloudpink.svg"
              alt="awaken"
              className="w-[25%] mt-20"
            />
          </Parallax>
        </div>
      </div>
      <div className="w-screen flex flex-col mt-24">
        <div className="absolute mt-20">
          <img src="/images/waterfall.svg" alt="waterfall" className="-ms-10" />
        </div>
        <div className="absolute mt-20">
          <Parallax opacity={[0, 1]} translateY={[-30, 30]}>
            <img
              src="/images/waterfallpink.svg"
              alt="waterfall"
              className="-ms-10 mt-5"
            />
          </Parallax>
        </div>
      </div>
      <h1 className="text-5xl font-extrabold m-auto pt-8">{content.title}</h1>
      <p className="text-center m-auto p-5 text-2xl w-6/12">
        {content.description}
      </p>
      <div className="flex flex-col items-center pt-32">
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
