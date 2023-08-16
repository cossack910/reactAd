import { Outlet } from "react-router-dom";

export const Page1: React.FC = () => {
  return (
    <div>
      <h1>ページ1</h1>
      <Outlet />
    </div>
  );
};

export default Page1;
