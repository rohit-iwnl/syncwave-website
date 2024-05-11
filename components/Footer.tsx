"use server";
import React from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
type Props = {};

export default async function Footer({}: Props) {
  return (
    <div className="h-[60px] flex flex-row items-center justify-between px-5 py-5 text-footerGray">
      <div className="flex flex-row gap-3 items-center justify-center">
        <Image
          src="/assets/images/SyncwaveLogo.svg"
          alt="Syncwave Logo"
          width={32}
          height={32}
          className="fill-footerGray"
        />
        <h1 className="font-bold uppercase">Syncwave</h1>
      </div>
      <p className="text-sm hidden md:flex">©2024 Copyright : Syncwave</p>
      <div className="flex flex-row">
        <SocialIcon
          url="https://twitter.com/"
          bgColor="transparent"
          fgColor="#878787"
        />
        <SocialIcon
          url="https://instagram.com/"
          bgColor="transparent"
          fgColor="#878787"
        />
        <SocialIcon
          url="https://linkedin.com/"
          bgColor="transparent"
          fgColor="#878787"
        />
      </div>
    </div>
  );
}
