import React from "react";
import { usePasswordContext } from "../../contexts/PasswordContext/usePasswordContext";
import { useKeyPress } from "../../hooks/useKeyPress";
import { useRouterContext } from "../router/hooks/useRouterContext";

const DefaultKeyboard: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { setShowPassword, generateNewPassword } = usePasswordContext();
  const { location, navigate } = useRouterContext();

  const isSPressed = useKeyPress("KeyS");
  const isGPressed = useKeyPress("KeyG");
  const isHPressed = useKeyPress("KeyH");
  const isMPressed = useKeyPress("KeyM");

  React.useEffect(() => {
    if (isSPressed) setShowPassword((prev) => !prev);
  }, [isSPressed]);

  React.useEffect(() => {
    if (isGPressed) generateNewPassword();
  }, [isGPressed]);

  React.useEffect(() => {
    if (isHPressed && location !== "/help") navigate("/help");
  }, [isHPressed]);

  React.useEffect(() => {
    if (isMPressed && location !== "/") navigate("/");
  }, [isMPressed]);

  return <>{children}</>;
};

export default DefaultKeyboard;
