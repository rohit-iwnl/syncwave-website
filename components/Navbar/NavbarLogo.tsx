import React from "react";
import Image from "next/image";

export default function NavbarLogo() {
  return (
    <Image
      src="/assets/logos/navbarLogo.svg"
      width={0}
      height={0}
      alt="Syncwave Logo"
      className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] "
    />
  );
}
