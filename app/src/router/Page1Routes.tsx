import Page1 from "../Page1";
import Page1Detail from "../Detail/Page1Detail";
import { routeArr } from "./RouteInterface";

export const page1Routes: routeArr[] = [
  { path: "/page1", element: <Page1 /> },
  { path: "/page1/detail", element: <Page1Detail /> },
];
