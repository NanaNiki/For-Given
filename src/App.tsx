import React from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import Step6 from "./components/Step6";

function App() {
  return (
    <>
      <div className="h-full">
        <header className="text-center min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-white shadow-animation text-5xl font-extrabold m-auto">
            The Zen Art of Forgivness
          </h1>
          <p className="my-5 text-lg">
            Dear traveler, I welcome you to this sacred space,<br></br> seeking
            solace and guidance on your path of radical forgiveness.
            <br></br>Sit before me and open your heart to the wisdom I shall
            impart.
          </p>
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
          src="/images/roottree.svg"
          alt="sakura tree"
          className="absolute z-0 w-screen h-screen top-0 left-0"
        />
        <img
          src="/images/land.svg"
          alt="sakura tree"
          className="absolute z-0 w-screen h-screen bottom-0 right-0"
        />
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
        <Step5 />
        <Step6 />
        <div className="h-screen w-screen flex flex-col items-center">
          <p className="text-center m-auto p-5 text-xl w-8/12">
          Dear traveler, ponder these questions deeply as you progress through
          each step of the journey. <br></br>Allow them to guide your reflections and
          insights, leading you towards radical forgiveness and profound
          transformation.
        </p>
        </div>
      </div>
    </>
  );
}

export default App;
