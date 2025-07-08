import React from "react";
import { Modal, ModalTrigger } from "./ui/animated-modal";
import { SkillsDetails } from "@/constants/resources";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="flex  gap-6 pt-2 pb-2  h-full w-full px-5 ">
      <div className="flex flex-col gap-7 h-full w-full ">
        <div className="flex">
          <p className="text-2xl font-semibold">
            what's usually in my terminal:
          </p>
        </div>
        <div className="flex pl-10 gap-10 w-full h-full">
          <SkillsCard />
        </div>
      </div>
    </div>
  );
};

export default Skills;

const SkillsCard = () => {
  return (
    <Modal>
      <div className="flex flex-wrap gap-5">
        {SkillsDetails.map((item, key) => {
          return (
            <ModalTrigger
              key={key}
              className={` bg-gray-700  text-white flex justify-center group/modal-btn`}
            >
              <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                {item.skillName}
              </span>
              <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                {Array.isArray(item.logo) ? (
                  <div className="flex gap-1">
                    {item.logo.map((logo, logoIndex) => (
                      <React.Fragment key={logoIndex}>
                        {
                          <Image
                            src={logo}
                            width={30}
                            height={30}
                            className="contrast-100"
                            alt={item.skillName}
                          />
                        }
                      </React.Fragment>
                    ))}
                  </div>
                ) : (
                  <Image
                    src={item.logo as string}
                    width={30}
                    className={`${
                      item.skillName == "Next.js" ? "contrast-1" : ""
                    }`}
                    height={30}
                    alt={item.skillName}
                  />
                )}
              </div>
            </ModalTrigger>
          );
        })}
      </div>
    </Modal>
  );
};
