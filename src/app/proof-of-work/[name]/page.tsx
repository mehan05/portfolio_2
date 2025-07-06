"use client";
import ProjectDetailCard from "@/components/ProjectDetailCard";
import { projectDetails } from "@/constants/resources";
import { div } from "motion/react-client";
import React, { use, useEffect, useState } from "react";
interface ProjectProps {
  title: string;
  shortDescription: string;
  description: string;
  skills: string[];
  deployedLink: string;
  githubLink: string;
  imageUrl: string;
  date:string;
}
const page = ({ params }:{params: Promise<{ name: string }>}) => {
  
    const {name} = use(params);

  const [projectDetail, setProjectDetail] = useState<ProjectProps>({
    title: "",
    shortDescription: "",
    description: "",
    skills: [],
    deployedLink: "",
    githubLink: "",
    imageUrl: "",
    date:""
  });

  useEffect(() => {
    const project = projectDetails.find(
      (item) => item.title.replace(" ", "-").toLowerCase() ===  name
    );
    setProjectDetail(project);
  });

  return (
    <div className="h-full w-full border-b pb-10">
      <ProjectDetailCard
        title={projectDetail.title}
        image={projectDetail.imageUrl}
        longDescription={projectDetail.description}
        skills={projectDetail.skills}
        date={projectDetail.date}
      />
    </div>
  );
};

export default page;
