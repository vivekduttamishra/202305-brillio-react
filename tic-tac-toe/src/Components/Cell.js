import React from "react";

const Cell = ({ isClicked, cells, next }) => {
  return (
    <>
      {cells.map((cell, index) => (
        <button
          className="cell"
          onClick={() =>
            isClicked(
              next === "" ? "X" : next === "O" ? "X" : "O",
              parseInt(index)
            )
          }
        >
          {cell}
        </button>
      ))}
    </>
  );
};

export default Cell;
