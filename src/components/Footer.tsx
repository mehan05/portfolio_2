import { githubLogo, linkedInLogo, mail, resume, xLogo } from "@/constants/imageUrls";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between w-full h-full">
      <div className="flex flex-col gap-3">
        <p className="text-gray-400">
          <span> &copy;</span>2025 Mehan
        </p>
        <p className="text-gray-400">Made with ❤️ by Mehan</p>
      </div>
      <div className="flex gap-2">
        <a href="https://github.com/mehan05" >
          <Image src={githubLogo} width={30} height={30} alt="GitHub" className="invert" />
        </a>
        <a href="https://www.linkedin.com/in/mehan05/">
          <Image src={linkedInLogo} width={30} height={30} alt="GitHub" className="invert" />
        </a>
        <a href="https://x.com/mehan_05">
          <Image src={xLogo} width={30} height={30} alt="GitHub"  className="invert"/>
        </a>
        <a href="mailto:mehanmehan6@gmail.com">
          <Image src={mail} width={30} height={30} alt="GitHub" className="invert" />
        </a>
        {/* <a href="https://github.com/mehan05">
          <Image src={resume} width={30} height={30} alt="GitHub" />
        </a> */}
      </div>
    </div>
  );
};

export default Footer;
