import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import GreenDraggable from './components/GreenDraggable';
import BlueDraggable from './components/BlueDraggable';
import useWindowResize from './hooks/useWindowResize';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [bluePosition, setBluePosition] = useState({ x: 200, y: 0 }); // Starting position for blue square
  const [redPosition, setRedPosition] = useState({ x: 0, y: 200 });

  const updatePositions = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Ensure draggable items stay within bounds
    setPosition((prev) => ({
      x: Math.max(0, Math.min(prev.x, windowWidth - 100)), // Limit width
      y: Math.max(0, Math.min(prev.y, windowHeight - 100)), // Limit height
    }));

    setBluePosition((prev) => ({
      x: Math.max(0, Math.min(prev.x, windowWidth - 100)), // Limit width
      y: Math.max(0, Math.min(prev.y, windowHeight - 100)), // Limit height
    }));

    setRedPosition((prev) => ({
      x: Math.max(0, Math.min(prev.x, windowWidth - 100)), // Limit width
      y: Math.max(0, Math.min(prev.y, windowHeight - 100)), // Limit height
    }));
  };

  // Use the custom hook
  useWindowResize(updatePositions);

  const handleDragEnd = (event) => {
    const { active } = event;

    // Get window dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Update position for the green square
    if (active.id === 'green-draggable') {
      const newX = Math.max(0, Math.min(position.x + event.delta.x, windowWidth - 100)); // Limit width
      const newY = Math.max(0, Math.min(position.y + event.delta.y, windowHeight - 100)); // Limit height
      setPosition({ x: newX, y: newY });
    }

    // Update position for the blue square
    if (active.id === 'blue-draggable') {
      const newX = Math.max(0, Math.min(bluePosition.x + event.delta.x, windowWidth - 100)); // Limit width
      const newY = Math.max(0, Math.min(bluePosition.y + event.delta.y, windowHeight - 100)); // Limit height
      setBluePosition({ x: newX, y: newY });
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
        <GreenDraggable position={position} />
        <BlueDraggable position={bluePosition} />
      </div>
    </DndContext>
  );
}

export default App;
