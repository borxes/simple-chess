import React from 'react';

import Square from './Square';

// state describes the position of the pieces
export default function Board({ state, onClick }) {
  return (
    <div className="board" onClick={onClick}>
      {state.map((row, indexRow) => (
        <div className="row" key={indexRow}>
          {
            row.map((piece, indexCol) => (
              <Square row={indexRow} col={indexCol} piece={piece} key={indexRow * 8 + indexCol} />
            ))
          }
        </div>
      ))}
    </div>
  );
}
