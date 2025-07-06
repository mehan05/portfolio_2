import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import GIthubStats from "@/components/GIthubStats";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-full">
      <Header />
      <div className="w-full border-t  border-white" />
      <div className="flex justify-start items-center w-full mt-5">
        <Skills />
      </div>

      <div className="w-full h-auto  scrollbar max-h-[90%]">
        <Experience />
      </div>

      <div className="w-[90%] ">
        <GIthubStats />
      </div>

      <div className="flex justify-center items-center mt-5 mb-5">
        <p>~ Every great dev once googled “how to center a div.” ~</p>
      </div>
      <div className="w-full border-t  border-white" />
    </div>
  );
}
