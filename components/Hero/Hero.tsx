"use client";
import React from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";

const Mockups = dynamic(
    () => import("@/components/MockupSection/Mockups"),
    { ssr: false },
);

export default function Hero() {
    return (
        <div className="flex flex-col w-full h-full items-center justify-center relative">
            <motion.img
                initial={{ scale: 10, y: "0%" }}
                animate={{ scale: 4, y: "-25vh" }}
                transition={{ duration: 1.5, delay: 0.25, ease: "easeInOut" }}
                src="/assets/logos/heroIcon.png"
                width={0}
                height={0}
                alt="Hero Icon"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] absolute"
            />

            {/* Hero Text */}
            <section className="flex flex-col items-center justify-center gap-y-4 w-full h-full max-w-4xl md:max-w-5xl text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: "0%" }}
                    transition={{ duration: 0.75, delay: 1, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center gap-y-2 w-full"
                >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        Your swiss army knife for student life
                    </h1>
                    <p className="text-sm md:text-md lg:text-lg text-muted-foreground px-10">
                        Syncwave is a platform that helps you manage your
                        student life.
                    </p>
                </motion.div>
                <Mockups />
            </section>
        </div>
    );
}
