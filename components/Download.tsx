"use server";

import Image from "next/image";
import React from "react";

type Props = {};

export default async function Download({}: Props) {
  return (
    <div className="min-h-[70vh] flex  justify-evenly px-5 py-10 md:p-10 bg-gradient-to-b from-white from-70% to-green-200">
      {/* Left Side */}
      <div className="flex items-start max-w-7xl flex-col">
        {/* Text */}
        <div className="space-y-16 justify-center flex items-start h-full flex-col">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl ">
            How it works
          </h1>
          <p className="font-medium max-w-3xl">
            Unlocking the full potential of SyncWave is a seamless journey
            tailored to your needs. Begin by signing up with a few simple steps,
            where you&apos;ll have the opportunity to provide a variety of
            preferences that shape your experience. Whether you&apos;re
            searching for the perfect roommate to share your space, seeking
            student housing that feels like home, or looking to lease your own
            space to fellow students, SyncWave&apos;s intuitive software matches
            you effortlessly. Through an intuitive interface you can take
            control of your shared finances effortlessly. SyncWave fosters
            community, connecting you with peers who share your journey
            throughout the use of the app.
            <br />
            <br />
            Join us today and embark on a student living experience redefined.
          </p>

          <div className="mt-10 flex flex-row items-start gap-6">
            <Image
              src="/assets/images/download/ios.svg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-32 h-32 object-contain"
              alt="App Store"
            />
            <Image
              src="/assets/images/download/android.svg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-32 h-32 object-contain"
              alt="App Store"
            />
          </div>
        </div>
      </div>
      {/* Right Side */}

      <div className="hidden md:flex">
        <Image
          src="/assets/images/download.png"
          alt="Features Mockup"
          width={0}
          height={0}
          sizes="100vw"
          className="object-contain h-full w-[22vw] "
        />
      </div>
    </div>
  );
}
