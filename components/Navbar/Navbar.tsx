import React from "react";
import NavbarLogo from "./NavbarLogo";
import Link from "next/link";
import { RainbowButton } from "../magicui/rainbow-button";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <div className="flex w-full items-center justify-between p-4 max-w-6xl mx-auto z-10">
      <div className="flex items-center justify-center gap-x-2">
        <NavbarLogo />
        <Link
          href="/"
          className="text-xl font-medium hover:font-bold transition-all duration-200 hover:underline underline-offset-8"
        >
          Syncwave
        </Link>
      </div>

      {/* Right Side */}

      <Button className="bg-foreground text-[#C3FF19] rounded-xl">
        Join Waitlist
      </Button>
    </div>
  );
}
