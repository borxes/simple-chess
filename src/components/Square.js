import React from 'react';
import Piece from './Piece';

import { useDrop } from 'react-dnd';

const cellIdx = (row, col) => row * 8 + col;
const cellColor = (row, col) => (row % 2) === (col % 2) ? 'var(--lite-cell)' : 'var(--dark-cell)';

export default function Square({ row, col, piece, draggable, movePiece, isLegalMove }) {

  const [{ isOver, droppedItem }, drop] = useDrop({
    accept: 'Piece',
    drop: () => {
      console.log(`dropping ${JSON.stringify(droppedItem)} in ${row} ${col}`);
      movePiece({ row, col }, droppedItem);
    },
    canDrop: () => isLegalMove({ row, col }, droppedItem),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
      droppedItem: monitor.getItem(),
    }),
  })

  return (
    <div
      className={isOver ? 'cell cell-over' : 'cell'}
      key={cellIdx(row, col)}
      id={cellIdx(row, col)}
      style={{ backgroundColor: cellColor(row, col) }}
      ref={drop}
    >
      <Piece type={piece} row={row} col={col} draggable={draggable} />
    </div>
  );
}
