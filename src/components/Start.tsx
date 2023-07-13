import React from "react";
import { Parallax } from "react-scroll-parallax";

export default function Start() {
  return (
    <div className="h-screen w-screen">
      <Parallax opacity={[-0.25, 1]} translateY={[-115, 90]}>
        <div className="bg-pink-300 rounded-full h-36 w-36 mx-auto"></div>
      </Parallax>
      <Parallax opacity={[-0.25, 1]} translateX={[-10, 3]}>
        <img src="/images/travel.svg" alt="road" className="absolute" />
      </Parallax>
      <div className="flex flex-col w-10/12 items-end pe-2">
        <Parallax opacity={[0, 1]} translateY={[-115, 510]}>
          <img
            src="/images/flowers.svg"
            alt="road"
            className="w-16 h-16"
          />
        </Parallax>
      </div>
      <p className="text-center m-auto p-5 pb-0 text-2xl w-8/12 mt-32">
        Dear traveler, <br></br>I welcome you to this sacred space,<br></br>
        seeking solace and guidance<br></br> on your path of radical
        forgiveness.
      </p>
      <img
        src="/images/traveler.svg"
        alt="road"
        className="absolute h-64 right-[10%]"
      />
      <Parallax scaleX={[1, 1.15]}>
        <p className="text-start m-auto p-5 text-2xl w-8/12 mt-36">
          Sit before me and open your heart to the wisdom I shall impart.
        </p>
      </Parallax>
    </div>
  );
}
