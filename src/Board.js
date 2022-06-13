import React from "react";
import Cell from "./Cell";
import "./Board.css";

function Board() {
  return (
    <div className="board">
      <div className="container">
        <div className="column">
          <div className="row">
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
          </div>
          <div className="row">
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
          </div>
          <div className="row">
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
          </div>
          <div className="row">
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
          </div>
          <div className="row">
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
