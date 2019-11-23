import React from 'react';

import Board from './components/Board';
import * as pieces from './constants/chess';

import './App.css';

const {
  WHITE_KING, WHITE_ROOK, WHITE_QUEEN, WHITE_BISHOP, WHITE_KNIGHT, WHITE_PAWN,
  BLACK_KING, BLACK_ROOK, BLACK_QUEEN, BLACK_BISHOP, BLACK_KNIGHT, BLACK_PAWN,
  EMPTY } = pieces;

const emptyRow = Array(8).fill(EMPTY);

const initialBoard = [
  [BLACK_ROOK, BLACK_KNIGHT, BLACK_BISHOP, BLACK_KING,
    BLACK_QUEEN, BLACK_BISHOP, BLACK_KNIGHT, BLACK_ROOK],
  [BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN,
    BLACK_PAWN, BLACK_PAWN, BLACK_PAWN],
  emptyRow, emptyRow, emptyRow, emptyRow,
  [WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN,
    WHITE_PAWN, WHITE_PAWN, WHITE_PAWN],
  [WHITE_ROOK, WHITE_KNIGHT, WHITE_BISHOP, WHITE_KING,
    WHITE_QUEEN, WHITE_BISHOP, WHITE_KNIGHT, WHITE_ROOK],
];

function App() {
  return (
    <div>
      This is chess
      <Board state={initialBoard} />
    </div>
  );
}

export default App;
