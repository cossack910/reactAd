import { Outlet } from "react-router-dom";

export const Page2: React.FC = () => {
  return (
    <div>
      <h1>ページ2</h1>
      <Outlet />
    </div>
  );
};

export default Page2;
