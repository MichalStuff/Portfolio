import Lottie from "lottie-react";
import animationData from "../assets/coding_animation.json";

const About = () => {
  return (
    <section
      id="About"
      className="text-left h-screen flex flex-col items-center justify-center p-6 narrow:pb-[90px] md:gap-6 lg:gap-16 lg:pb-0 xl:gap-20"
    >
      <article className="flex flex-col gap-6  lg:gap-10">
        <h1 className="text-5xl font-medium text-primary underline underline-offset-8 landscape:lg:text-6xl">
          About
        </h1>
        <p className="text-xl text-slate-200 narrow:text-xl md:text-2xl ">
          My name is Michał Szuleta from Poland. I graduated from Czestochowa
          University of Technology. I am currently developing my frondend
          develepr skills with React.js and started learning C# with .Net.
          Besides programming i like motcycles, movies, sprot and IoT/robotics.
          I am not afraid of using unconventional solutions.
        </p>
      </article>
      <Lottie
        animationData={animationData}
        className="w-4/5 max-w-[300px] md:max-w-[400px] narrow:hidden"
      />
    </section>
  );
};

export default About;
