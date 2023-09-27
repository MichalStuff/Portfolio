import Lottie from "lottie-react";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import animationData from "../assets/coding_animation2.json";
import { Button } from "../components/Button";
import TypeEffect from "../components/TypeEffect";

export const Welcome = () => {
  return (
    <section className="flex flex-col justify-center h-screen pt-16 pb-32 px-6">
      <article className="flex flex-col items-center justify-center gap-2 text-center md:gap-4 w-full ">
        <h1 className="block text-5xl font-normal text-center lg:text-6xl w-[100%]">
          Hello, I'm Michał Szuleta
        </h1>
        <TypeEffect
          text={["Frontend Developer", "Fullstack Developer", "I Love to code"]}
          emoji={[" 🤩", " 🧐", " 💖"]}
          typeInterval={150}
          puaseInterval={3000}
          delteInterval={50}
        />
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
