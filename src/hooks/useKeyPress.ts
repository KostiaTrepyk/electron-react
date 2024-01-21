import React from "react";

export function useKeyPress(targetKey: string): boolean {
  const [isPressed, setIsPressed] = React.useState<boolean>(false);

  React.useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.code !== targetKey) return;
      setIsPressed(true);
    };

    const keyUpHandler = (e: KeyboardEvent) => {
      if (e.code !== targetKey) return;
      setIsPressed(false);
    };

    window.addEventListener("keydown", keyDownHandler);
    window.addEventListener("keyup", keyUpHandler);

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
      window.removeEventListener("keyup", keyUpHandler);
    };
  }, [targetKey]);

  return isPressed;
}
