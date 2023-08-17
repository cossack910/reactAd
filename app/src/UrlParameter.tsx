import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(location);
  return (
    <div>
      <h1>パラメータ表示</h1>
      <p>pathパラメータ/:idは{id}</p>
      <p>queryパラメータ {query.get("name")}</p>
    </div>
  );
};

export default UrlParameter;
