import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ExperienceContent } from "@/constants/resources";

const Experience = () => {
  return (
    <div>
      <Card className=" bg-black text-white">
        <CardHeader>
          <CardTitle className="font-bold text-2xl">Experience</CardTitle>
        </CardHeader>
        <CardDescription className="w-full  flex flex-col gap-5  items-center ">
          {ExperienceContent.map((item, key) => (
            <Card key={key} className="w-[90%] bg-black text-white border">
              <CardHeader className="">
                <CardTitle className="font-bold text-xl">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pl-10" charlen={50}>
                <p className="text-lg text-gray-500">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </CardDescription>
      </Card>
    </div>
  );
};

export default Experience;
