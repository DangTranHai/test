import { Route } from "react-router-dom";
import { lazy, type LazyExoticComponent, type ComponentType } from "react";

type TRoute = {
  path: string;
  element: LazyExoticComponent<ComponentType<any>>;
  nested?: TRoute[];
};

const routes: TRoute[] = [
  {
    path: "",
    element: lazy(() => import("./../pages/HomeTemplate")),
    nested: [
      {
        path: "",
        element: lazy(() => import("./../pages/HomeTemplate/Home")),
      },
      {
        path: "about",
        element: lazy(() => import("./../pages/HomeTemplate/About")),
      },
    ],
  },
  {
    path: "admin",
    element: lazy(() => import("./../pages/AdminTemplate")),
    nested: [
      {
        path: "dashboard",
        element: lazy(() => import("./../pages/AdminTemplate/Dashboard")),
      },
    ],
  },
  {
    path: "auth",
    element: lazy(() => import("./../pages/AdminTemplate/Auth")),
  },
];

export const renderRoute = () => {
  return routes.map((route) => {
    const Element = route.element;

    if (route.nested) {
      return (
        <Route key={route.path} path={route.path} element={<Element />}>
          {route.nested.map((item) => {
            const ChildElement = item.element;

            return (
              <Route
                key={item.path}
                path={item.path}
                element={<ChildElement />}
              />
            );
          })}
        </Route>
      );
    }

    return <Route key={route.path} path={route.path} element={<Element />} />;
  });
};
