"use client";
import React from "react";
import { PlayAudio } from "./helpers/PlayAudio";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigator = () => {
  const pathName = usePathname();
  console.log(pathName);
  const InsideProjectDetail = pathName.split("proof-of-work/")[1]||"";
  return (
    <div className="flex flex-col gap-2 sm:flex-row items-center w-full justify-between">
      <div className="flex gap-2">
        <a className="text-2xl font-semibold" href="https://x.com/mehan_05" target="blank">
          @mehan_05
        </a>
        <div className="flex items-end text-lg">
          <p>[Mehan]</p>
        </div>
      </div>

      <div className=" flex gap-5 items-center">
        <PlayAudio />
        {pathName === "/proof-of-work" ? (
          <Link href="/" className="cursor-pointer py-1 px-2 border rounded-xl">
            {"<="} Home
          </Link>
        ) : !!InsideProjectDetail ?(
          <Link href="/proof-of-work" className="cursor-pointer py-1 px-2 border rounded-xl">
            {"<="} Proof_of_work
          </Link>
        ): (
          <Link href="/proof-of-work" className="cursor-pointer py-1 px-2 border rounded-xl">
            Proof_of_work ={">"}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navigator;
