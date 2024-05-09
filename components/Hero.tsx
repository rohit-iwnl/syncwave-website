import Link from "next/link";
import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="w-full h-screen flex mt-10 md:mt-14 gap-10 flex-col">
      <div className="flex flex-col gap-5">
        <h1
          className="text-5xl text-center font-bold bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(to bottom, #242424, #8A8A8A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Your all-in-one solution for student life
        </h1>
        <p className="text-md md:text-lg text-center">
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
          className="rounded-full border-[#727272] border-[2px] px-4 py-2 "
        >
          <button>
            <p className="text-[#727272]">explore</p>
          </button>
        </Link>

        <Link
          href="/about_us"
          className="rounded-full border-[#727272] border-[2px] px-4 py-2 "
        >
          <button>
            <p className="text-[#727272]">about us</p>
          </button>
        </Link>
      </div>
    </div>
  );
}
