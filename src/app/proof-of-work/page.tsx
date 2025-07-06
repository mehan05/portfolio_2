import { projectDetails } from "@/constants/resources";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full ">
      <h1 className="text-2xl font-semibold">Proof Of Work</h1>
      <div className="flex flex-col gap-5 mt-5">
        {projectDetails.map((item, key) => (
          <Link 
            href={`/proof-of-work/${item.title.replace(" ", "-").toLowerCase()}`}
            key={key}
          >
            <div
              key={key}
              className="border border-gray-900 hover:border hover:border-white hover:scale-x-105 transition duration-300  p-5 rounded-2xl  h-auto "
            >
              <div className="flex flex-col gap-2 ">
                <div className="flex">
                  <p className="font-semibold text-2xl ">{item.title}</p>
                </div>
                <div className="flex  overflow-y-auto scrollbar max-h-[200px]">
                  <p className="font-semibold break-words w-full">
                    {item.shortDescription}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
