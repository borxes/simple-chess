import React from 'react';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';

import { EMPTY } from '../helpers/chess';

const chessSymbols = ['♔', '♕', '♖', '♗', '♘', '♙', '♚', '♛', '♜', '♝', '♞', '♟', '\u00A0'];

export default function Piece({ type, row, col, draggable }) {

  const [{ isDragging }, drag] = useDrag({
    item: { type: 'Piece' },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
    canDrag: monitor => draggable && type !== EMPTY,
    begin: monitor => {
      return { row, col, type };
    }
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
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  draggable: PropTypes.bool.isRequired,
};