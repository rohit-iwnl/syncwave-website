"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="w-full max-w-7xl mx-auto h-screen max-h-screen flex mt-10 gap-10 flex-col">
      <div className="flex flex-col gap-5">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-bold bg-clip-text text-transparent px-2"
          style={{
            backgroundImage: "linear-gradient(to bottom, #242424, #8A8A8A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Your all-in-one solution for student life
        </h1>
        <p className="text-sm md:text-lg text-center px-2">
          Curate the perfect accommodations, sync schedules, streamline tasks,
          and
          <br className="hidden md:flex" /> explore more features to simplify
          your student journey.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-row items-center justify-center gap-10">
        <Link
          href="/explore"
          className="rounded-full border-[#727272] border-[2px] hover:border-green-300 transition-colors duration-300 px-4 py-2 "
        >
          <button>
            <p className="text-[#727272] font-bold">explore</p>
          </button>
        </Link>

        <Link
          href="/aboutUs"
          className="rounded-full border-[#727272] hover:border-green-300 transition-colors duration-300 ease-in-out border-[2px] px-4 py-2 "
        >
          <button>
            <p className="text-[#727272] font-bold">about us</p>
          </button>
        </Link>
      </div>

      {/* Mockup and background */}

      <div className="flex flex-col flex-1 items-center justify-center overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            initial={{
              opacity: 0.1,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: "easeIn",
            }}
          >
            <Image
              src="/assets/images/Flower.svg" // Ensure the path is correct
              alt="mockup"
              layout="fill" // Takes the full width and height of the parent
              className="object-cover object-top absolute bottom-0 " // Covers the entire area of the container, possibly cropping the image
            />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 1.5,
              ease: "easeIn",
            }}
            className="relative w-full h-full flex items-center justify-center border-b-2"
          >
            <Image
              src="/assets/images/14pro.png"
              alt="mockup"
              width={0}
              height={0}
              sizes="100vw"
              className="object-contain absolute md:bottom-0  w-[60%] h-[85%] "
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
