import React from 'react';

import { useDrop } from 'react-dnd';
import Square from './Square';

// state describes the position of the pieces
export default function Board({ state, dropPiece }) {

  return (
    <div className="board">
      {state.map((row, indexRow) => (
        <div className="row" key={indexRow}>
          {
            row.map((piece, indexCol) => (
              <Square
                row={indexRow}
                col={indexCol}
                piece={piece}
                dropPiece={dropPiece}
                key={indexRow * 8 + indexCol}
              />
            ))
          }
        </div>
      ))}
    </div>
  );
}
