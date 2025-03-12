import Image from "next/image";
import sora from "./font";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen relative max-w-6xl mx-auto md:max-w-7xl">
      <nav className="w-full h-[5rem] flex absolute items-center justify-center">
        <Navbar />
      </nav>
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  );
}
