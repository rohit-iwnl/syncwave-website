"use client";
import React from "react";
import NavbarLogo from "./NavbarLogo";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <motion.div
      initial={{
        y: "-200%",
      }}
      animate={{
        y: "0%",
      }}
      transition={{
        duration: 1,
        delay: 1.2,
        ease: "easeInOut",
      }}
      className="flex w-full items-center justify-between p-4 max-w-6xl mx-auto z-10"
    >
      <div className="flex items-center justify-center gap-x-2">
        <NavbarLogo />
        <Link
          href="/"
          className="text-sm md:text-md lg:text-lg font-medium hover:font-bold transition-all duration-200 hover:underline underline-offset-8"
        >
          Syncwave
        </Link>
      </div>

      {/* Right Side */}

      <Button className="bg-foreground text-[#C3FF19] rounded-xl cursor-pointer hover:font-semibold hover:underline hover:underline-offset-4 transition-all">
        Join Waitlist
      </Button>
    </motion.div>
  );
}
