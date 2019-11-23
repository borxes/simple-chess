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

  // const movePiece = (x, y) => { };

  // const [{ isOver }, drop] = useDrop({
  //   accept: 'piece',
  //   drop: () => movePiece(x, y),
  //   collect: monitor => ({
  //     isOver: !!monitor.isOver(),
  //   }),
  // })

  const handleClick = evt => {
    // let { nodeName, id } = evt.target;
    // if (nodeName === 'SPAN') {
    //   id = evt.target.closest('div').id;
    // }
    // console.log(id);
    // const [row, col] = [~~(id / 8), id % 8];
    // const newBoard = [...board];
    // console.log(`setting new cell at ${row}/${col}`);
    // newBoard[row][col] = BLACK_QUEEN;
    // setBoard(newBoard);
    console.log('clickz');
  }

  return (
    <Board state={board} onClick={handleClick} />
  );
}
