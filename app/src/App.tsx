import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./route/Home";
import Page1 from "./route/Page1";
import Page2 from "./route/Page2";
import Page1Detail from "./route/Detail/Page1Detail";
import Page2Detail from "./route/Detail/Page2Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />}>
          <Route path="detail" element={<Page1Detail />} />
        </Route>
        <Route path="/page2" element={<Page2 />}>
          <Route path="detail" element={<Page2Detail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
