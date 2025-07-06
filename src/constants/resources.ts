import { desc } from "motion/react-client";
import {
  anchorLogo,
  expressLogo,
  mongoLogo,
  nextjsLogo,
  nodeLogo,
  reactLogo,
  rustLogo,
  tsLogo,
} from "./imageUrls";

export const ProfileImageUrl =
  "https://avatars.githubusercontent.com/u/115608700?s=400&u=bf831a92813772fb388568f5227f3dc68debead7&v=4";

export const SkillsDetails = [
  {
    skillName: "Rust",
    logo: rustLogo,
  },
  {
    skillName: "Next.js",
    logo: nextjsLogo,
  },
  {
    skillName: "Anchor",
    logo: anchorLogo,
  },
  {
    skillName: "TypeScript",
    logo: tsLogo,
  },
  {
    skillName:
      "                                                   MERN                                                 ",
    logo: [mongoLogo, expressLogo, reactLogo, nodeLogo],
  },
];

export const ExperienceContent = [
  {
    title: "Front-End Intern @TheAlterOffice",
    description: "Worked On a Customers management system built for ITW",
  },
];

export const projectDetails = [
  {
    title: "Job_assist",
    shortDescription:
      "Build a LinkedIn-like app using Next.js, Node.js, Prisma, PostgreSQL, Tailwind CSS,  with features like auth, profiles, job posts, Use Prisma for database ORM ",
    description:
      "Building a full-stack web application like LinkedIn requires several key features, including user authentication, profiles, connections, job postings, , and more. Below is a high-level breakdown of how you can build it using Next.js, Node.js, PostgreSQL, Prisma, and Tailwind CSS.",
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "Next.js",
      "UI Libraries",
      "Tailwind CSS",
      "PostgereSQL",
      "Prisma",
    ],
    deployedLink: "https://job-assist.vercel.app/",
    githubLink: "https://icons8.com/icons/set/music--style-ios",
    imageUrl: "/projectImages/job_assist.png",
    date: "2025",
  },
  {
    title: "NFT Gallery",
    shortDescription:
      "NFT Gallery is a sleek platform to showcase and manage your digital collectibles with smooth browsing and sharing. 🎨🚀",
    description:
      "NFT Gallery is a visually stunning platform to showcase, explore, and manage your digital collectibles. Display your NFT collection in a sleek, customizable gallery with seamless browsing and sharing features. 🚀🎨",
    skills: [
      "React",
      "Tailwind CSS",
      "Openzeppelin Contracts",
      "Solidity",
      "Ethereum",
      "Hardhat",
      "Pinata",
      "IPFS",
    ],
    deployedLink: "",
    githubLink: "https://github.com/mehan05/NFT_Gallery",
    imageUrl: "/projectImages/nft_gallery.png",
    date: "2024",
  },

  {
    title: "Recipe Selling",
    shortDescription:
      "A Web3-powered platform where chefs and home cooks sell and buy exclusive recipes using Ethereum. Unlock premium content with crypto payments. 🍽️🧾",
    description:
      "A Recipe Selling Platform allows chefs, home cooks to sell and buy exclusive recipes. Users can purchase recipes using Web3 payments using  Ethereum chain, and unlock premium content.",
    skills: ["Node.js", "React", "Express.js","MongoDB","Ether.js","Tailwindcss"],
    deployedLink: "https://recipe-client-8512.onrender.com/",
    githubLink: "https://github.com/mehan05/Recipe_Selling.git",
    imageUrl: "/projectImages/recipe_selling.png",
    date: "2024",
  },
];
