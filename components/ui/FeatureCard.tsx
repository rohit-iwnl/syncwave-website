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
    <div className="flex items-center justify-center gap-4 flex-row">
      <Image
        src={`/assets/images/features/${iconFile}`}
        alt={title}
        width={48}
        height={48}
      />
      <div className="flex flex-col gap-8">
        <h2 className="font-bold">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
