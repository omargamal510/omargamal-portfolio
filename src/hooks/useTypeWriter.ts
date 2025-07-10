import { useEffect, useState } from "react";

export const useTypeWriter = (
  textProp: string = "Text Placeholder",
  speed: number = 50
) => {
  const [textState, setTextState] = useState<string[]>([]);

  useEffect(() => {
    setTextState([]);
    let index: number = 0;

    const interval = setInterval(() => {
      if (index < textProp.length) {
        setTextState((prev) => [...prev, textProp[index - 1]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [textProp, speed]);

  return { text: textState.join("") };
};
