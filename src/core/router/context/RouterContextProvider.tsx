import React from "react";
import { RouterContext, routerContext } from "./routerContext";

interface RouterContextProviderProps extends React.PropsWithChildren {}

const RouterContextProvider: React.FC<RouterContextProviderProps> = ({
  children,
}) => {
  /* const [history, setHistory] = React.useState<string[]>([]); */
  const [location, setLocation] = React.useState<string>("/");

  const navigate = React.useCallback((to: string) => {
    setLocation(to);
  }, []);

  const contextValue: RouterContext = React.useMemo(
    () => ({
      location,
      navigate,
    }),
    [location]
  );

  return (
    <routerContext.Provider value={contextValue}>
      {children}
    </routerContext.Provider>
  );
};

export default RouterContextProvider;
