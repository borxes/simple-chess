import React, { useState } from 'react';

import Board from './components/Board';
import { pieceColor, WHITE, BLACK } from './helpers/chess';
import {
  WHITE_KING, WHITE_ROOK, WHITE_QUEEN, WHITE_BISHOP, WHITE_KNIGHT, WHITE_PAWN,
  BLACK_KING, BLACK_ROOK, BLACK_QUEEN, BLACK_BISHOP, BLACK_KNIGHT, BLACK_PAWN,
  EMPTY
} from './helpers/chess';


const emptyRow = () => Array(8).fill(EMPTY);

const initialBoard = () => [
  [BLACK_ROOK, BLACK_KNIGHT, BLACK_BISHOP, BLACK_KING,
    BLACK_QUEEN, BLACK_BISHOP, BLACK_KNIGHT, BLACK_ROOK],
  [BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN,
    BLACK_PAWN, BLACK_PAWN, BLACK_PAWN],
  emptyRow(), emptyRow(), emptyRow(), emptyRow(),
  [WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN,
    WHITE_PAWN, WHITE_PAWN, WHITE_PAWN],
  [WHITE_ROOK, WHITE_KNIGHT, WHITE_BISHOP, WHITE_KING,
    WHITE_QUEEN, WHITE_BISHOP, WHITE_KNIGHT, WHITE_ROOK],
];

export default function Chess() {

  const [board, setBoard] = useState(initialBoard());
  const [turn, setTurn] = useState(WHITE);
  const [victory, setVictory] = useState(false);
  const [winner, setWinner] = useState();

  const restart = () => {

    setBoard(initialBoard());
    setTurn(WHITE);
    setVictory(false);
    setWinner(null);
  }

  const movePiece = (to, item) => {
    const newBoard = [...board];
    newBoard[item.row][item.col] = EMPTY;
    const dest = newBoard[to.row][to.col];
    if (dest === WHITE_QUEEN) {
      setVictory(true);
      setWinner('Black');
    };
    if (dest === BLACK_QUEEN) {
      setVictory(true);
      setWinner('White');
    }

    newBoard[to.row][to.col] = item.type;
    setBoard(newBoard);
    setTurn(turn === WHITE ? BLACK : WHITE);
  }

  const isSameDiagonal = (x1, y1, x2, y2) => {
    return Math.abs(x2 - x1) === Math.abs(y2 - y1);
  }

  const checkPath = (x1, y1, x2, y2) => {
    // normalize
    if (x1 > x2) { let temp = x1; x1 = x2; x2 = temp; }
    if (y1 > y2) { let temp = y1; y1 = y2; y2 = temp; }

    let path = [];
    if (x1 === x2) {
      path = board[x1].slice(y1 + 1, y2)
    }

    if (y1 === y2) {
      path = board.map(row => row[y1]).slice(x1 + 1, x2)
    }

    if (isSameDiagonal(x1, y1, x2, y2)) {
      for (let i = x1 + 1; i < x2; i++) {
        const piece = board[i][y1 + i - x1];
        path.push(piece);
      }
    }
    return path.length > 0 ? path.every(cell => cell === EMPTY) : true;
  }

  const isLegalMove = (to, item) => {
    if (!to || !item) return false;
    const { row: rowTo, col: colTo } = to;
    const { row: rowFrom, col: colFrom, type } = item;

    // don't eat your own pieces
    if (pieceColor(board[rowTo][colTo]) === pieceColor(board[rowFrom][colFrom])) {
      return false;
    }

    if (type !== WHITE_KNIGHT && type !== BLACK_KNIGHT && !checkPath(rowFrom, colFrom, rowTo, colTo)) {
      return false;
    }

    switch (type) {
      case WHITE_KING: case BLACK_KING:
        return rowTo === rowFrom || colTo === colFrom;
      case WHITE_BISHOP: case BLACK_BISHOP:
        return colTo === colFrom || isSameDiagonal(rowTo, colTo, rowFrom, colFrom);
      case WHITE_ROOK: case BLACK_ROOK:
        return isSameDiagonal(rowTo, colTo, rowFrom, colFrom);
      case WHITE_PAWN: case BLACK_PAWN:
        return colTo === colFrom && Math.abs(rowTo - rowFrom) <= 2;
      case WHITE_QUEEN: case BLACK_QUEEN:
        return (colTo === colFrom || rowTo === rowFrom || isSameDiagonal(rowTo, colTo, rowFrom, colFrom)) &&
          !(Math.abs(rowTo - rowFrom) > 2 || Math.abs(colTo - colFrom) > 2);
      case WHITE_KNIGHT: case BLACK_KNIGHT:
        return (Math.abs(colTo - colFrom) === 2 && Math.abs(rowTo - rowFrom) === 1) ||
          (Math.abs(colTo - colFrom) === 1 && Math.abs(rowTo - rowFrom) === 2);
      default: return false;

    }
  }

  return (
    <>
      {!victory && <div className="status">Next Turn: {turn === WHITE ? 'White' : 'Black'}</div>}
      {victory &&
        <div className="status">Winner: {winner}
          <button className="restart-button" onClick={() => { restart(); }}>Restart</button>
        </div>
      }
      <Board
        state={board}
        victory={victory}
        turn={turn}
        movePiece={movePiece}
        isLegalMove={isLegalMove} />
    </>
  );
}
