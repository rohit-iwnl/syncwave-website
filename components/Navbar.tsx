"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

export default function Navbar({}: Props) {
  const [index, setIndex] = useState(0);

  const getClassName = (idx: number) => {
    return idx === index
      ? "px-4 py-2 bg-green-400 rounded-3xl" // Active state
      : "px-4 py-2 rounded-3xl"; // Inactive state
  };

  return (
    <div className="w-full px-5 py-8 justify-between items-center flex">
      {/* Logo */}
      <div className="flex items-center justify-center gap-2">
        <Image
          src="/assets/images/SyncwaveLogo.svg"
          alt="Syncwave Logo"
          width={42}
          height={42}
        />
        <h1 className="text-lg font-bold uppercase">Syncwave</h1>
      </div>

      {/* MenuBar */}
      <div className="flex flex-row gap-6 justify-center items-center">
        <Link
          href="/"
          className={getClassName(0)}
          onClick={(e) => {
            e.preventDefault(); // Prevent the default link behavior
            setIndex(0);
          }}
        >
          <p>Explore</p>
        </Link>
        <Link
          href="/"
          className={getClassName(1)}
          onClick={(e) => {
            e.preventDefault(); // Prevent the default link behavior
            setIndex(1);
          }}
        >
          <p>About Us</p>
        </Link>
      </div>
    </div>
  );
}
