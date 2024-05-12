"use server";
import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  iconFile: string;
};

export default async function FeatureCard({
  title,
  description,
  iconFile,
}: Props) {
  return (
    <div className="flex items-start gap-6 flex-row">
      <Image
        src={`/assets/images/features/${iconFile}`}
        alt={title}
        width={0}
        height={0}
        className="w-10 h-10 object-contain mt-5 md:w-10 md:h-10"
      />
      <div className="flex flex-col text-wrap leading-loose gap-4 w-full md:w-[22vw]">
        <h2 className="font-bold">{title}</h2>
        <p className="text-sm md:w-[18vw]">{description}</p>
      </div>
    </div>
  );
}
