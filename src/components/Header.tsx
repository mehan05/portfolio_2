import { ProfileImageUrl } from "@/constants/resources";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 pt-2 pb-2  w-full px-5  ">
      <div className="flex justify-center items-center lg:justify-start shrink-0">
        <Image
          className="rounded-full shadow-lg"
          src={ProfileImageUrl}
          width={200}
          height={200}
          alt={"mehan"}
        />
      </div>
      <div className="  text-justify ">
        <div className="pl-5 flex flex-col gap-3">
          Prefix Min-Width Common Device sm 640px Small tablets / large phones
          md 768px Tablets lg 1024px Laptops xl 1280px Desktops 2xl 1536px Large
          desktops / high-res screens ￼ Example
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
