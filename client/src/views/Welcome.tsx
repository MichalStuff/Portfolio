import Lottie from "lottie-react";
import animationData from "../assets/coding_animation2.json";
import { Button } from "../components/Button";

export const Welcome = () => {
  return (
    <section className="flex flex-col  w-[100svw] py-32 px-6 gap-20">
      <article className="flex flex-col justify-center gap-2 text-center">
        <h1 className="text-4xl font-medium text-center">Michał Szuleta</h1>
        <h2 className="text-2xl font-medium text-center">Frontend Developer</h2>
        <p>
          I'm a 25 years old graduate of the Czestochowa University of
          Technology.
        </p>
        <Button>About</Button>
      </article>
      <header className="flex items-center justify-center">
        <Lottie animationData={animationData} className="w-4/5" />
      </header>
    </section>
  );
};
