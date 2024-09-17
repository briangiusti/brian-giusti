import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import Draggable from './components/Draggable';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDragEnd = (event) => {
    const { active, over } = event;

    // If needed, you can set conditions for different droppable areas
    const newX = event.delta.x + position.x;
    const newY = event.delta.y + position.y;

    // Update position state
    setPosition({ x: newX, y: newY });
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
        <Draggable position={position} />
      </div>
    </DndContext>
  );
}

export default App;