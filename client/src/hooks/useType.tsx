import { useEffect, useState } from "react";

export enum TypePhase {
  Type,
  Pause,
  Delete,
}

export const useType = ({
  text,
  typeInterval = 150,
  puaseInterval = 1000,
  delteInterval = 150,
  emoji = [],
}: {
  text: string[];
  emoji?: string[];
  typeInterval?: number;
  puaseInterval?: number;
  delteInterval?: number;
}): {
  ariaLabel: string;
  text: string;
} => {
  const [index, setIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>("");
  const [phase, setPhase] = useState<TypePhase>(TypePhase.Type);

  useEffect(() => {
    switch (phase) {
      case TypePhase.Type: {
        const nextText = text[index].slice(0, currentText.length + 1);
        if (nextText === currentText) {
          emoji.length > 0
            ? setCurrentText(
                (prev) =>
                  prev + (emoji[index] !== undefined ? emoji[index] : "")
              )
            : null;
          setPhase(TypePhase.Pause);
          return;
        }

        const timeout = setTimeout(() => {
          setCurrentText(nextText);
        }, typeInterval);
        return () => clearInterval(timeout);
      }
      case TypePhase.Delete: {
        const nextToDelete = text[index].slice(0, currentText.length - 1);
        if (!currentText) {
          const nextIndex = index + 1;
          setIndex(text[nextIndex] ? nextIndex : 0);
          setPhase(TypePhase.Type);
          return;
        }

        const timeout = setTimeout(() => {
          setCurrentText(nextToDelete);
        }, delteInterval);
        return () => clearInterval(timeout);
      }
      case TypePhase.Pause:
      default: {
        const timeout = setTimeout(() => {
          setPhase(TypePhase.Delete);
        }, puaseInterval);

        return () => clearTimeout(timeout);
      }
    }
  }, [
    text,
    currentText,
    typeInterval,
    delteInterval,
    phase,
    index,
    puaseInterval,
  ]);

  return { text: currentText, ariaLabel: text[index] };
};
