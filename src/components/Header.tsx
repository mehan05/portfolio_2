import { ProfileImageUrl } from "@/constants/resources";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex gap-6 pt-2 pb-2  w-full pl-5 pr-5 h-[250px] ">
      <div>
        <Image
          className="rounded-full shadow-lg"
          src={ProfileImageUrl}
          width={200}
          height={200}
          alt={"mehan"}
        />
      </div>
      <div className=" w-3/4 text-justify ">
          <div className="pl-5 flex flex-col gap-3">
            <p className="">
              gm gm. i’m a 19-year-old software engineer from India — currently
              vibing between Rust, Anchor, and Next.js.
            </p>
            <p>
              I build fullstack web applications and am currently a student at{" "}
              <span>Solana Turbine</span>.
            </p>{" "}
            <p>Love to talk about Marvel + Hollywood</p>
          </div>
      </div>
    </div>
  );
};

export default Header;
