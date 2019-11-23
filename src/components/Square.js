import React from 'react';
import Piece from './Piece';

import { useDrop } from 'react-dnd';

const cellIdx = (row, col) => row * 8 + col;
const cellColor = (row, col) => (row % 2) === (col % 2) ? 'var(--lite-cell)' : 'var(--dark-cell)';

export default function Square({ row, col, piece }) {

  const [{ isOver }, drop] = useDrop({
    accept: 'Piece',
    drop: () => { console.log('dropping') },
    canDrop: () => { return true; },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  })

  return (
    <div
      className="cell"
      key={cellIdx(row, col)}
      id={cellIdx(row, col)}
      style={{ backgroundColor: cellColor(row, col) }}
      ref={drop}
    >
      <Piece type={piece} />
    </div>
  );
}
