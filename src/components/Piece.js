import React from 'react';
import PropTypes from 'prop-types';

import { useDrag } from 'react-dnd';

const chessSymbols = ['♔', '♕', '♖', '♗', '♘', '♙', '♚', '♛', '♜', '♝', '♞', '♟', '\u00A0'];
const dragTypes = ['white_king', 'white_queen', 'white_rook', 'white_bishop', 'white_knight', 'white_pawn', 'black_king', 'black_queen', 'black_rook', 'black_bishop', 'black_knight', 'black_pawn', '\u00A0'];


export default function Piece({ type }) {

  const [{ isDragging }, drag] = useDrag({
    item: { type: 'Piece' },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  return (
    <span className="piece" ref={drag} style={{
      opacity: isDragging ? 0.5 : 1,
      fontSize: 25,
      fontWeight: 'bold',
      cursor: 'move',
    }}>{chessSymbols[type]}</span>
  );
}

Piece.propTypes = {
  type: PropTypes.number.isRequired,
};