"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Navbar({}: Props) {
  const [index, setIndex] = useState(0);

  const getClassName = (idx: number) => {
    return idx === index
      ? "px-4 py-2 bg-green-400 rounded-3xl" // Active state
      : "px-4 py-2 rounded-3xl"; // Inactive state
  };

  return (
    <motion.div
      initial={{
        y: -100,
        opacity: 0.5,
      }}
      animate={{
        y: -0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="w-full sticky top-0 z-[99] px-5 py-8 justify-between items-center flex"
    >
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
      <div className="hidden md:flex flex-row gap-6 justify-center items-center">
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

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>
    </motion.div>
  );
}
