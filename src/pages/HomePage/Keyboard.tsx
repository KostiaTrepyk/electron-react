import React from "react";
import { useKeyPress } from "../../hooks/useKeyPress";

interface KeyboardProps {
  toggleSettingsOpened: () => void;
}

export function Keyboard({ toggleSettingsOpened }: KeyboardProps) {
  const isSpacePressed = useKeyPress("Space");

  React.useEffect(() => {
    if (isSpacePressed) toggleSettingsOpened();
  }, [isSpacePressed]);

  return <></>;
}
