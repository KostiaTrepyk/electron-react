import { useContext } from "react";
import { passwordContext } from "./context";

export function usePasswordContext() {
  const context = useContext(passwordContext);

  if (!context) throw new Error("No password context");

  return context;
}
