import { githubLogo, redirectLogo } from "@/constants/imageUrls";
import Image from "next/image";

interface ProjectDetailCardProps {
  title: string;
  date: string;
  image: string;
  longDescription: string;
  skills: string[];
}

const ProjectDetailCard = ({
  title,
  date,
  image,
  longDescription,
  skills,
}: ProjectDetailCardProps) => {
    console.log("image",image);
  return (
    <div className=" w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-4xl font-semibold ">{title}</h1>
          <p className="text-xl text-gray-400">{date}</p>
        </div>
        <div className="flex gap-3 items-center">
          <a href="">
            {githubLogo && (
              <Image
                src={githubLogo}
                alt={title}
                width={30}
                height={30}
                className="invert"
              />
            )}
          </a>
          <a href="">
            {redirectLogo && (
              <Image
                src={redirectLogo}
                alt={title}
                width={20}
                height={20}
                className="invert"
              />
            )}
          </a>
        </div>
      </div>

      {image && image.length > 0 && (
        <div className="my-4 w-full flex items-center justify-center">
          {image && (
            <Image
              src={image}
              alt={title}
              height={300}
              width={500}
              className="rounded-md border  border-neutral-800 object-contain "
            />
          )}
        </div>
      )}

      <div className="pl-10">
        <div className="space-y-3">
          <p>
            <span className="font-semibold text-4xl">{title}</span>{" "}
          </p>
          <p className="w-full break-words">{longDescription}</p>
        </div>

        <div className="mt-5">
          <h3 className="text-4xl font-semibold mb-2">skills used</h3>
          <ul className="list-disc list-inside text-lg text-gray-300 space-y-1">
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailCard;
