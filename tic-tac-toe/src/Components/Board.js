import React, { Component } from "react";
import Cell from "./Cell";

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cells: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      next: "",
    };
  }

  // onReset = () => {
  //   this.setState({ cells: [" ", " ", " ", " ", " ", " ", " ", " ", " "] });
  //   this.setState({ next: "" });
  // };

  onCellClicked = (cell, index) => {
    if (this.state.cells[index] === " ") {
      let temp = this.state.cells;
      temp.map((ele, ind) => {
        return ind === index ? (temp[ind] = cell) : "";
      });
      this.setState({ cells: temp });
      this.setState({ next: cell });
    }
  };

  render() {
    console.log(this.state.cells);
    return (
      <div className="board">
        <Cell
          isClicked={this.onCellClicked}
          cells={this.state.cells}
          next={this.state.next}
        />
      </div>
    );
  }
}

export default Board;
