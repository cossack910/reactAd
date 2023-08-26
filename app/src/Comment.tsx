import { CommentInterface } from "./interface/comment";
import React from "react";

const dotComCheckFunc = (text: string) => {
  if (~text.indexOf(".com")) {
    return true;
  }
  return false;
};

export const Comment: React.FC<
  Pick<CommentInterface, "body" | "id" | "email">
> = (props) => {
  const { body, id, email } = props;
  const emailDotComCheck: string = dotComCheckFunc(email)
    ? "[.com]"
    : "[ドットコム違う]";
  return <p>{`${emailDotComCheck}..${body}(コメントID:${id})`}</p>;
};

export default Comment;
