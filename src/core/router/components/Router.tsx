import React from "react";
import RouterContextProvider from "../context/RouterContextProvider";
import { routerContext } from "../context/routerContext";
import ViewTransitionAnimation from "./ViewTransitionAnimation";

type Route = {
  path: string;
  element: JSX.Element;
};
interface RouterProps {
  routes: Route[];
  defaultElement: JSX.Element;
  layout: React.FC<React.PropsWithChildren>;
  animateVeiwTransition?: boolean;
}

const Router: React.FC<RouterProps> = ({
  routes,
  defaultElement,
  layout: Layout,
  animateVeiwTransition = false,
}) => {
  return (
    <RouterContextProvider>
      <Layout>
        <routerContext.Consumer>
          {({ location }) => {
            let page = defaultElement;
            for (const route of routes) {
              if (route.path === location) page = route.element;
            }

            if (animateVeiwTransition)
              return (
                <ViewTransitionAnimation pageKey={location}>
                  {page}
                </ViewTransitionAnimation>
              );

            return page;
          }}
        </routerContext.Consumer>
      </Layout>
    </RouterContextProvider>
  );
};

export default Router;
