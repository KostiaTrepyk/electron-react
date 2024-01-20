import { useContext } from "react";
import { routerContext } from "../context/routerContext";

export function useRouterContext() {
  const context = useContext(routerContext);

  if (!context) throw new Error("no router context");

  return context;
}
