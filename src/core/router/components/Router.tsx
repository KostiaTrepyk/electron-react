import React from "react";
import RouterContextProvider from "../context/RouterContextProvider";
import { routerContext } from "../context/routerContext";

type Route = {
  path: string;
  element: JSX.Element;
};
interface RouterProps {
  routes: Route[];
  defaultElement: JSX.Element;
}

const Router: React.FC<RouterProps> = ({ routes, defaultElement }) => {
  return (
    <RouterContextProvider>
      <routerContext.Consumer>
        {({ location }) => {
          for (const route of routes) {
            if (route.path === location) return route.element;
          }

          return defaultElement;
        }}
      </routerContext.Consumer>
    </RouterContextProvider>
  );
};

export default Router;
