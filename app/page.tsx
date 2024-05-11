import Hero from "@/components/Hero";
import Features from "@/components/Features";
export default function Home() {
  return (
    <div className="md:max-w-7xl mx-auto flex flex-col">
      <Hero />
      <Features />
    </div>
  );
}
