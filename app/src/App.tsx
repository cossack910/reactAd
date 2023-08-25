import "./App.css";
import axios from "axios";

function App() {
  const onClickComments = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        console.log(res.data);
      })
      .catch(() => {
        console.log("error");
      });
  };

  const onClickComment1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments/4")
      .then((res) => {
        console.log(res.data);
      })
      .catch(() => {
        console.log("error");
      });
  };

  return (
    <div className="App">
      <button onClick={onClickComments}>comments</button>
      <button onClick={onClickComment1}>id=1:comments</button>
    </div>
  );
}

export default App;
