import React, { useState } from "react";
import Board from "./Board";

const Game = props => {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null)
    }
  ]);
const [stepNumber,setStepNumber] = useState(0);
const [xIsNext,setXIsNext] = useState(true);


  const calculateWinner = squares => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = i => {
    const history1 = history.slice(0, stepNumber + 1);
    const current = history1[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistory(history1.concat([
      {
        squares: squares
      }
    ]));
    setStepNumber(history1.length);
    setXIsNext(!xIsNext);
   
  }

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  let status;
  if (winner) {
    status = "The Winner Is : " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <h3>{status}</h3>
      <br />
      <div className="tabel ctr">
        <Board squares={current.squares} onClick={i => handleClick(i)} />
      </div>
    </div>
  );
};

export default Game;
