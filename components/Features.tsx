"use server";
import React from "react";
import FeatureCard from "./ui/FeatureCard";

type Props = {};

const features = [
  {
    title: "Find a roommate",
    description:
      "Our software will match you with someone who fits your lifestyle and personal preferences",
    iconPath: "users.svg",
  },
  {
    title: "Split Expenses",
    description:
      "Manage finances better with roommates by customized payment methods and bill splitting",
    iconPath: "dollar.svg",
  },
  {
    title: "Find student housing",
    description: "New to town? Find  accommodations that are perfect for you",
    iconPath: "home.svg",
  },
  {
    title: "Sell or Buy Items",
    description:
      "Moving out? Moving in? Find quality furnishings and items being sold by students near you",
    iconPath: "store.svg",
  },
  {
    title: "Find a community",
    description:
      "Our personalized experience can connect you to a community of students just like you",
    iconPath: "chat.svg",
  },
  {
    title: "Lease your space",
    description:
      "Have a place you need to sublease? List your space on the platform for other students to find",
    iconPath: "lease.svg",
  },
];

export default async function Features({}: Props) {
  return (
    <div className="flex w-full max-w-7xl mx-auto items-center justify-center flex-col mt-32 md:mt-40">
      <h1 className="text-3xl font-bold text-center md:text-4xl lg:text-5xl px-10">
        A platform for all your student-life needs
      </h1>
      <div className="min-h-[50vh] p-10 mt-10 w-full  grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-12 md:gap-4">
        {features
          ? features.map((feature, idx) => (
              <FeatureCard
                key={idx}
                title={feature.title}
                description={feature.description}
                iconFile={feature.iconPath ?? ""}
              />
            ))
          : null}
      </div>
    </div>
  );
}
