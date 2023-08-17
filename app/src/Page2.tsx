import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>ページ2</h1>
      <Link to="detail">detail</Link>
      <br />
      <Link to={Math.floor(Math.random() * 10).toString()}>
        UrlParameter/:id
      </Link>
      <br />
      <Link to={Math.floor(Math.random() * 10).toString() + "?name=hoge"}>
        QuertParameter/:id
      </Link>
    </div>
  );
};

export default Page2;
