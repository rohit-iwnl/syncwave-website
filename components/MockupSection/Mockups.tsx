"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

export default function Mockups() {
    // Always declare all hooks at the top level
    const containerRef = useRef(null);

    // Track when the component enters the viewport
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "start -0.1"], // This triggers when the component enters the top 50% of the screen
    });

    // Now the values will transform as the component moves through the specified viewport range
    const leftYTransform = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);
    const leftMidYTransform = useTransform(scrollYProgress, [0, 1], [
        "5%",
        "0%",
    ]);
    const middleYTransform = useTransform(scrollYProgress, [0, 1], [
        "0%",
        "0%",
    ]);
    const rightMidYTransform = useTransform(scrollYProgress, [0, 1], [
        "5%",
        "0%",
    ]);
    const rightYTransform = useTransform(scrollYProgress, [0, 1], [
        "10%",
        "0%",
    ]);

    return (
        <motion.div
            ref={containerRef}
            initial={{ y: "100%" }}
            animate={{ y: "25%" }}
            transition={{ duration: 1.5, delay: 0.25, ease: "easeInOut" }}
            className="w-full h-[60vh] flex items-center justify-center overflow-hidden absolute bottom-0"
        >
            <div className="relative w-full h-full max-w-screen overflow-hidden md:max-w-7xl flex flex-row items-center justify-center gap-x-4">
                {/* Left image */}
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "10%" }}
                    style={{ y: leftYTransform }}
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

                {/* Left-middle image */}
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "5%" }}
                    style={{ y: leftMidYTransform }}
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

                {/* Middle image */}
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    style={{ y: middleYTransform }}
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

                {/* Right-middle image */}
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "5%" }}
                    style={{ y: rightMidYTransform }}
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

                {/* Right image */}
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "10%" }}
                    style={{ y: rightYTransform }}
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
