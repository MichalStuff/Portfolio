import { twMerge } from "tailwind-merge";
import { useType } from "../hooks/useType";

const TypeEffect = ({
  text,
  typeInterval = 150,
  puaseInterval = 3000,
  delteInterval = 50,
  emoji = [],
  className,
}: {
  text: string[];
  emoji?: string[];
  typeInterval?: number;
  puaseInterval?: number;
  delteInterval?: number;
  className?: string;
}) => {
  const { displayText, ariaLabel } = useType({
    text: text,
    puaseInterval: puaseInterval,
    typeInterval: typeInterval,
    delteInterval: delteInterval,
    emoji: emoji,
  });
  return (
    <span
      className={twMerge(
        className,
        `text-3xl font-medium text-center after:content-['|'] after:animate-blink after:p-1 lg:text-4xl"`
      )}
      aria-label={ariaLabel}
    >
      {displayText}
    </span>
  );
};

export default TypeEffect;
