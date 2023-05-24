import React from "react";
import Header from "./Components/Header";
import Game from "./Components/Game";
import "./app.css";
const App = () => {
  return (
    <div className="app">
      <Header title="Tic Tac Toe" />
      <Game />
    </div>
  );
};

export default App;
