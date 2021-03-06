export const WHITE_KING = 0;
export const WHITE_QUEEN = 1;
export const WHITE_ROOK = 2;
export const WHITE_BISHOP = 3;
export const WHITE_KNIGHT = 4;
export const WHITE_PAWN = 5;
export const BLACK_KING = 6;
export const BLACK_QUEEN = 7;
export const BLACK_ROOK = 8;
export const BLACK_BISHOP = 9;
export const BLACK_KNIGHT = 10;
export const BLACK_PAWN = 11;
export const EMPTY = 12;

export const [NONE, WHITE, BLACK] = [0, 1, 2];

export const pieceColor = piece => {
  if (piece === EMPTY)
    return NONE;
  else
    return [WHITE_KING, WHITE_ROOK, WHITE_QUEEN, WHITE_BISHOP,
      WHITE_KNIGHT, WHITE_PAWN].includes(piece) ? WHITE : BLACK;
};
