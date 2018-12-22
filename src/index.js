import React from "react";
import ReactDOM from "react-dom";
import Infinitescroll from "./components/infinitescroll";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <h1>User</h1>
      <Infinitescroll />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
