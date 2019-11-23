import React from 'react';
import PropTypes from 'prop-types';

const chessSymbols = ['♔', '♕', '♖', '♗', '♘', '♙', '♚', '♛', '♜', '♝', '♞', '♟', ''];

export default function Piece({ type }) {
  return (
    <span className="piece">{chessSymbols[type]}</span>
  );
}

Piece.propTypes = {
  type: PropTypes.number.isRequired,
};