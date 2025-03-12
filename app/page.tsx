import Image from "next/image";
import sora from "./font";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Navbar />
      <main>
        {/* <Image
          src="/assets/logos/navbarLogo.svg"
          width={100}
          height={100}
          alt="Syncwave Logo"
        /> */}
      </main>
    </div>
  );
}
