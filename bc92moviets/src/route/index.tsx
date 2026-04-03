import { Route } from "react-router-dom";
import { lazy, type LazyExoticComponent, type ComponentType } from "react";

type TRoute = {
  path: string;
  element: LazyExoticComponent<() => JSX.Element>;
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
    if (route.nested) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.nested.map((item) => (
            <Route key={item.path} path={item.path} element={<item.element />} />
          ))}
        </Route>
      );
    }

    return <Route key={route.path} path={route.path} element={<route.element />} />;
  });
};