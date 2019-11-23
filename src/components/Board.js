import React from 'react';
import Square from './Square';
import { pieceColor } from '../helpers/chess';

// state describes the position of the pieces
export default function Board({ state, victory, turn, movePiece, isLegalMove }) {

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
                draggable={!victory && turn === pieceColor(piece)}
                movePiece={movePiece}
                isLegalMove={isLegalMove}
                key={indexRow * 8 + indexCol}
              />
            ))
          }
        </div>
      ))}
    </div>
  );
}
