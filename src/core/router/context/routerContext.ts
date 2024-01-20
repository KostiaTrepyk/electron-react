import { createContext } from "react";

export interface RouterContext {
  location: string;
  navigate: (to: string) => void;
}
export const routerContext = createContext<RouterContext>(null);
