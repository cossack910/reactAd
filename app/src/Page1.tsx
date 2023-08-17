import { Link, useNavigate } from "react-router-dom";
import { css } from "@emotion/react";

export const Page1 = () => {
  //state受け渡すだけのテスト配列
  const arr = [...Array(100).keys()];
  const button = css({
    margin: 0,
    backgroundColor: "pink",
  });

  const navigate = useNavigate();

  const onClickDeatil = () => {
    navigate("detail");
  };

  return (
    <div>
      <h1>ページ1</h1>
      <Link to={{ pathname: "detail" }} state={arr}>
        detail
      </Link>
      <br />
      <button css={button} onClick={onClickDeatil}>
        DetailButton
      </button>
    </div>
  );
};

export default Page1;
