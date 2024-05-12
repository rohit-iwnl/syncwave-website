import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Download from "@/components/Download";
export default function Home() {
  return (
    <div className=" mx-auto flex flex-col">
      <Hero />
      <Features />
      <Download />
    </div>
  );
}
