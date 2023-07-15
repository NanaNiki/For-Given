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
      <div className="flex flex-col items-center">
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
      <h1 className="text-5xl font-extrabold m-auto pt-28">{content.title}</h1>
      <p className="text-center m-auto p-5 text-2xl w-6/12">
        {content.description}
      </p>
      <div className="flex flex-col w-screen items-center justify-center my-4">
        <Parallax rotate={["360deg", "0deg"]} scale={[0, 1.5]}>
          <img
            src="/images/flowers.svg"
            alt="flower"
            className="w-96  mx-auto"
          />
        </Parallax>
      </div>

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

{/* <div className="flex flex-row w-screen items-center justify-center">
        <Parallax translateX={[10, -50]}>
          <img src="/images/heartL.svg" alt="heart" className="w-32 my-10" />
        </Parallax>
        <Parallax translateX={[-10, 50]}>
          <img src="/images/heartR.svg" alt="heart" className="w-32 my-10" />
        </Parallax>
      </div> */}

    </div>
  );
}
