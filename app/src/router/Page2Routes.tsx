import Page2 from "../Page2";
import Page2Detail from "../Detail/Page2Detail";
import { routeArr } from "./RouteInterface";
import UrlParameter from "../UrlParameter";

export const page2Routes: routeArr[] = [
  { path: "/page2", element: <Page2 /> },
  { path: "/page2/:id", element: <UrlParameter /> },
  { path: "/page2/detail", element: <Page2Detail /> },
];
