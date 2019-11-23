import React from 'react'
import Piece from './Piece';

const cellColor = (row, col) => (row % 2) === (col % 2) ? 'var(--lite-cell)' : 'var(--dark-cell)';

// state describes the position of the pieces
export default function Board({ state }) {
  return (
    <div>
      {state.map((row, indexRow) => (
        <div className="row">
          {row.map((cell, indexCol) => (
            <div
              className='cell'
              key={indexRow * 8 + indexCol}
              style={{ backgroundColor: cellColor(indexRow, indexCol) }}
            >
              <Piece type={cell} />
            </div>
          ))
          }
        </div>
      ))}
    </div>
  );
}
