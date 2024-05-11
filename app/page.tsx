import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div className="md:max-w-7xl mx-auto flex flex-col">
      <Hero />
      <div className="w-full bg-red-200 h-screen"></div>
    </div>
  );
}
