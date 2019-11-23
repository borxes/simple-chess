import React from 'react';

export default function Square({ children, color }) {
  const colorCode = color === 'white' ? '#eeeed2' : '#769656';
  return (
    <div style={{ backgroundColor: colorCode, display: 'inline' }}>
      {children}
    </div>
  );
}
