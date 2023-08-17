import Home from "../Home";
import PageNotFound from "../PageNotFound";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";
import { Routes, Route, Link } from "react-router-dom";

export const Router = () => {
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/page1"> Page1 </Link>
      <Link to="/page2"> Page2 </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        {page1Routes.map((route) => (
          <Route path={route.path} element={route.element}></Route>
        ))}
        {page2Routes.map((route) => (
          <Route path={route.path} element={route.element}></Route>
        ))}
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
};

export default Router;
