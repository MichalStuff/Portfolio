import Lottie from "lottie-react";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import animationData from "../assets/coding_animation2.json";
import { Button } from "../components/Button";
import { useType } from "../hooks/useType";

export const Welcome = () => {
  const { text, ariaLabel } = useType({
    text: ["Frontend Developer", "Fullstack Developer", "I Love to code"],
    puaseInterval: 3000,
    delteInterval: 50,
    emoji: [" 🤩", " 🧐", " 💖"],
  });
  return (
    <section className="flex flex-col justify-center h-[100svh] pt-16 pb-32 px-6 snap-strat">
      <article className="flex flex-col items-center justify-center gap-2 text-center md:gap-4 w-full ">
        <h1 className="block text-5xl font-normal text-center lg:text-6xl w-[100%]">
          Hello, I'm Michał Szuleta
        </h1>
        <span
          className="text-3xl font-medium text-center after:content-['|'] after:animate-blink after:p-1 lg:text-4xl"
          aria-label={ariaLabel}
        >
          {text}
        </span>
        <Button className="m-6 md:m-0" icon={faDownload}>
          Resume
        </Button>
      </article>
      <header className="flex items-center justify-center ">
        <Lottie
          animationData={animationData}
          className="w-4/5 md:w-3/5 lg:w-5/12 landscape:hidden landscape:lg:block xl:max-w-[450px]"
        />
      </header>
    </section>
  );
};
