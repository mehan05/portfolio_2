import Experience from "@/components/Experience";
import GIthubStats from "@/components/GIthubStats";
import Header from "@/components/Header";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <div className="flex flex-col items-center  w-full h-full">
      <Header />
      <div className="w-full border-t  border-white" />
      <div className="flex justify-start items-center w-full mt-5">
        <Skills />
      </div>

      <div className="w-full h-auto scrollbar ">
        <Experience />
      </div>

      <div className="w-full h-full  ">
        <GIthubStats />
      </div>

      <div className="flex w-full h-full justify-center items-center mt-5 mb-5">
        <p>~ Every great dev once googled “how to center a div.” ~</p>
      </div>
      <div className="w-full border-t h-full border-white" />
    </div>
  );
}
