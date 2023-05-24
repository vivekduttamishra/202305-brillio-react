import React from "react";
import Status from "./Status";
import Reset from "./Reset";
import Board from "./Board";

const Game = (props) => {
  console.log(props.onReset);
  return (
    <div className="game">
      <Status />
      <Board />
      <Reset reset={props.onReset} />
    </div>
  );
};

export default Game;
