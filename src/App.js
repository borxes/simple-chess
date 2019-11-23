import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Chess from './Chess';
import './App.css';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      This is chess
      <Chess />
    </DndProvider>
  );
}

export default App;
