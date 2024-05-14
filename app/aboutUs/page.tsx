import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="w-full max-w-7xl mx-auto min-h-[70vh] max-h-screen flex gap-10 flex-col items-center justify-center">
      <div className="flex flex-col gap-5 items-center justify-center">
        <h1
          className="text-5xl lg:text-6xl xl:text-7xl text-center font-bold bg-clip-text text-transparent px-2"
          style={{
            backgroundImage: "linear-gradient(to bottom, #242424, #8A8A8A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About us
        </h1>
        <h2 className="font-semibold mt-10 text-xl md:text-2xl lg:text-3xl text-center">Meet the team behind SyncWave</h2>
        <p className="text-center max-w-full md:max-w-[50vw] lg:max-w-[50vw]">
          A group of young minds came together at Arizona State University to
          create a solution to the problems international and out-of-state
          students face as they continue their academic career somewhere far
          from home.
        </p>
      </div>
    </div>
  );
}
