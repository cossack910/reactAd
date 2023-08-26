interface CommentType {
  id: number;
  email: string;
  body: string;
}

const dotComCheckFunc = (text: string) => {
  if (~text.indexOf(".com")) {
    return true;
  }
  return false;
};

export const Comment = (props: CommentType) => {
  const { body, id, email } = props;
  const emailDotComCheck: string = dotComCheckFunc(email)
    ? "[.com]"
    : "[ドットコム違う]";
  return <p>{`${emailDotComCheck}..${body}(コメントID:${id})`}</p>;
};

export default Comment;
