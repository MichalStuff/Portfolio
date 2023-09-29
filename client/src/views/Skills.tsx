import {
  SiCsharp,
  SiDotnet,
  SiReact,
  SiJavascript,
  SiStyledcomponents,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiGit,
  SiTypescript,
} from "react-icons/si";
import { DiNodejs, DiMongodb } from "react-icons/di";
import { BsFiletypeScss, BsFiletypeSql } from "react-icons/bs";
import SkillIcon from "../components/SkillIcon";
import { twMerge } from "tailwind-merge";

const iconsStyle = "w-full h-full text-primary";

const skillIcons = [
  {
    icon: <SiJavascript className={twMerge(iconsStyle)} />,
    title: "JavaScript",
  },
  { icon: <SiTypescript className={iconsStyle} />, title: "JavaScript" },
  { icon: <SiReact className={iconsStyle} />, title: "JavaScript" },
  { icon: <SiHtml5 className={iconsStyle} />, title: "JavaScript" },
  { icon: <SiCss3 className={iconsStyle} />, title: "JavaScript" },
  { icon: <BsFiletypeScss className={iconsStyle} />, title: "JavaScript" },
  { icon: <SiStyledcomponents className={iconsStyle} />, title: "JavaScript" },
  { icon: <SiTailwindcss className={iconsStyle} />, title: "JavaScript" },
  { icon: <DiNodejs className={iconsStyle} />, title: "JavaScript" },
  { icon: <SiExpress className={iconsStyle} />, title: "JavaScript" },
  { icon: <SiGit className={iconsStyle} />, title: "JavaScript" },
  { icon: <SiCsharp className={iconsStyle} />, title: "JavaScript" },
  { icon: <SiDotnet className={iconsStyle} />, title: "JavaScript" },
  { icon: <BsFiletypeSql className={iconsStyle} />, title: "JavaScript" },
  { icon: <DiMongodb className={iconsStyle} />, title: "JavaScript" },
];

const Skills = () => {
  return (
    <section className="flex flex-row flex-wrap items-center justify-center p-8">
      <h1 className="w-full text-5xl pb-6 font-medium text-primary underline underline-offset-8 landscape:lg:text-6xl">
        Skills
      </h1>
      {skillIcons.map((item, index) => (
        <SkillIcon key={index} icon={item.icon} title={item.title} />
      ))}
    </section>
  );
};

export default Skills;
