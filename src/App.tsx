import React from "react";
import { Parallax } from "react-scroll-parallax";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import Step6 from "./components/Step6";
import Start from "./components/Start";

function App() {
  return (
    <>
      <div className="h-full">
        <header className="text-center min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-white shadow-animation text-5xl font-extrabold m-auto pt-20">
            The Zen Art of Forgivness
          </h1>
          <Parallax translateY={[-100, 50]}>
            <p className="my-5 text-lg">Let us scroll </p>
          </Parallax>
        </header>

        <img
          src="/images/flowers.svg"
          alt="sakura flower"
          className="absolute top-[4.5em] left-[41%] h-[2em] w-[2em] flower1"
        />
        <img
          src="/images/flowers.svg"
          alt="sakura flower"
          className="absolute top-[12em] left-[32%] h-[2em] w-[2em] flower2 opacity-0"
        />
        <img
          src="/images/flowers.svg"
          alt="sakura flower"
          className="absolute top-[4em] left-[4%] h-[2em] w-[2em] flower3 opacity-0"
        />
        <img
          src="/images/sakuratree.svg"
          alt="sakura tree"
          className="absolute z-0 w-screen h-screen top-0 left-0"
        />
        <img
          src="/images/land.svg"
          alt="land"
          className="absolute z-0 w-screen h-screen bottom-0 right-0"
        />
        <Start />
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
        <Step5 />
        <Step6 />
        <div className="h-screen w-screen flex flex-col">
          <p className="text-start my-auto ms-20 p-5 text-2xl w-6/12">
            Dear traveler, ponder these questions deeply as you progress through
            each step of the journey. <br></br>Allow them to guide your
            reflections and insights, leading you towards radical forgiveness
            and profound transformation.
          </p>
          <div className="absolute right-16 mt-56">
            <Parallax opacity={[0,1]} translateY={[-200, 200]}>
              <div className="bg-pink-300 rounded-full h-36 w-36"></div>
            </Parallax>
          </div>
          <div className="w-screen flex-row flex items-end">
            <img
              src="/images/land.svg"
              alt="land"
              className=" absolute right-0"
            />
            <Parallax translateX={[130, 280]} scale={[1, 0]}>
              <img
                src="/images/moonlookin.svg"
                alt="traveler"
                className="w-[40%] -mb-4"
              />
            </Parallax>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
