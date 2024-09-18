import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import useWindowResize from './hooks/useWindowResize';
import { updatePositions } from './functions/updatePositions';
import { handleDragEnd } from './functions/handleDrag';
import Magnet from './components/Magnet';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [bluePosition, setBluePosition] = useState({ x: 200, y: 0 }); // Starting position for blue square

  useWindowResize(() => {
    updatePositions(position, setPosition);
    updatePositions(bluePosition, setBluePosition);
  });

  return (
    <DndContext onDragEnd={(event) => handleDragEnd(event, position, setPosition, bluePosition, setBluePosition)}>
      <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
        <Magnet position={bluePosition} id='blue-draggable' color="blue" title="blue"/>
        <Magnet position={position} id='green-draggable' color="green" title="green"/>
      </div>
    </DndContext>
  );
}

export default App;
