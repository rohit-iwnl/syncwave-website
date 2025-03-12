"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

export default function Mockups() {

    return (
        <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "25%" }}
            transition={{ duration: 1.5, delay: 0.75, ease: "easeInOut" }}
            className="w-full h-[60vh] flex items-center justify-center overflow-hidden absolute bottom-0"
        >
            {/* Add flex and gap between images */}
            <div className="relative w-full h-full max-w-screen overflow-hidden md:max-w-7xl flex flex-row items-center justify-center gap-x-4">
                {/* Individual containers for each image */}
                <motion.div
                    initial={{
                        y: "100%",
                    }}
                    animate={{
                        y: "10%",
                    }}
                    transition={{
                        duration: 1,
                        delay: 1.4,
                        ease: "easeInOut",
                    }}
                    className="relative w-[60%] h-full"
                >
                    <Image
                        src="/assets/mockups/left.png"
                        alt="Left mockup"
                        fill
                        className="object-contain hidden md:block"
                    />
                </motion.div>

                <motion.div
                    initial={{
                        y: "100%",
                    }}
                    animate={{
                        y: "5%",
                    }}
                    transition={{
                        duration: 0.9,
                        delay: 1.2,
                        ease: "easeInOut",
                    }}
                    className="relative w-[60%] h-full"
                >
                    <Image
                        src="/assets/mockups/left1.png"
                        alt="Left mockup"
                        fill
                        className="object-contain"
                    />
                </motion.div>
                <motion.div
                    initial={{
                        y: "100%",
                    }}
                    animate={{
                        y: "0%",
                    }}
                    transition={{
                        duration: 1,
                        delay: 1,
                        ease: "easeInOut",
                    }}
                    className="relative w-[60%] h-full"
                >
                    <Image
                        src="/assets/mockups/middle.png"
                        alt="Middle mockup"
                        fill
                        className="object-contain"
                    />
                </motion.div>
                <motion.div
                    initial={{
                        y: "100%",
                    }}
                    animate={{
                        y: "5%",
                    }}
                    transition={{
                        duration: 0.9,
                        delay: 1.2,
                        ease: "easeInOut",
                    }}
                    className="relative w-[60%] h-full"
                >
                    <Image
                        src="/assets/mockups/right.png"
                        alt="Right mockup"
                        fill
                        className="object-contain"
                    />
                </motion.div>
                <motion.div
                    initial={{
                        y: "100%",
                    }}
                    animate={{
                        y: "10%",
                    }}
                    transition={{
                        duration: 1,
                        delay: 1.4,
                        ease: "easeInOut",
                    }}
                    className="relative w-[60%] h-full"
                >
                    <Image
                        src="/assets/mockups/right1.png"
                        alt="Right mockup"
                        fill
                        className="object-contain hidden md:block"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
}
