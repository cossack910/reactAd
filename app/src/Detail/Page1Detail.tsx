import { useLocation, useNavigate } from "react-router-dom";
import { css } from "@emotion/react";

export const Page1Detail = () => {
  const button = css({
    margin: 0,
    backgroundColor: "green",
  });

  const { state } = useLocation();
  const navigate = useNavigate();
  const onClickBackPage1 = () => {
    navigate(-1); //前のページに戻る
  };
  return (
    <div>
      <h1>page1の詳細</h1>
      <p>{state}</p>
      <button css={button} onClick={onClickBackPage1}>
        backPage1
      </button>
    </div>
  );
};

export default Page1Detail;
