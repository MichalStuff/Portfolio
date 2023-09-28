import Lottie from "lottie-react";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import animationData from "../assets/coding_animation2.json";
import { Button } from "../components/Button";
import TypeEffect from "../components/TypeEffect";

export const Welcome = () => {
  return (
    <section
      id="Home"
      className="text-center h-screen flex flex-col items-center justify-center p-6 "
    >
      <div className="flex flex-col items-center justify-center gap-3 ">
        <h1 className="text-5xl md:text-6xl lg:text-6xl">
          Hello, I'm Michał Szuleta
        </h1>
        <TypeEffect
          text={["Frontend Developer", "Fullstack Developer", "I Love to code"]}
          emoji={[" 🤩", " 🧐", " 💖"]}
          typeInterval={150}
          puaseInterval={3000}
          delteInterval={50}
        />
        <Button className="m-6 md:m-3" icon={faDownload}>
          Resume
        </Button>
        <Lottie
          animationData={animationData}
          className="w-4/5 max-w-[300px] md:max-w-[400px] narrow:hidden"
        />
      </div>
    </section>
  );
};
