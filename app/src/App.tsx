import "./App.css";
import axios from "axios";
import { useState } from "react";
import Comment from "./Comment";
import { CommentInterface } from "./interface/comment";
import { UserProfile } from "./UserProfile";
import User from "./interface/user";

const user: User = {
  name: "god",
  hobbies: ["猫じゃらし", "散歩"],
};

function App() {
  const [comments, setComment] = useState<any>([]);
  const onClickComments = () => {
    axios
      .get<Array<CommentInterface>>(
        "https://jsonplaceholder.typicode.com/comments"
      )
      .then((res) => {
        setComment(res.data);
      })
      .catch(() => {
        console.log("error");
      });
  };

  return (
    <div className="App">
      <UserProfile user={user} />
      <button onClick={onClickComments}>comments</button>
      {comments.map((comment: CommentInterface) => (
        <Comment body={comment.body} id={comment.id} email={comment.email} />
      ))}
    </div>
  );
}

export default App;
