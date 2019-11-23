import React, { useState } from 'react';

import Board from './components/Board';
import * as pieces from './constants/chess';

const {
  WHITE_KING, WHITE_ROOK, WHITE_QUEEN, WHITE_BISHOP, WHITE_KNIGHT, WHITE_PAWN,
  BLACK_KING, BLACK_ROOK, BLACK_QUEEN, BLACK_BISHOP, BLACK_KNIGHT, BLACK_PAWN,
  EMPTY } = pieces;

const emptyRow = () => Array(8).fill(EMPTY);

const initialBoard = [
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

  const [board, setBoard] = useState(initialBoard);

  const dropPiece = (to, item) => {
    console.log(`dropPiece: To ${to.row} ${to.col} From ${item.row} ${item.col}`);
    const newBoard = [...board];
    newBoard[item.row][item.col] = EMPTY;
    newBoard[to.row][to.col] = item.type;
    setBoard(newBoard);
  }

  return (
    <Board state={board} dropPiece={dropPiece} />
  );
}
