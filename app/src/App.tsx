import "./App.css";
import axios from "axios";
import { useState } from "react";
import Comment from "./Comment";

interface CommentType {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

function App() {
  const [comments, setComment] = useState<any>([]);
  const onClickComments = () => {
    axios
      .get<Array<CommentType>>("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setComment(res.data);
      })
      .catch(() => {
        console.log("error");
      });
  };

  return (
    <div className="App">
      <button onClick={onClickComments}>comments</button>
      {comments.map((comment: CommentType) => (
        <Comment body={comment.body} id={comment.id} email={comment.email} />
      ))}
    </div>
  );
}

export default App;
