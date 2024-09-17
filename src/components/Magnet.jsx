// src/components/Draggable.jsx

import React, { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';

const Magnet = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggable',
  });

  const style = {
    position: 'absolute',
    top: position.y,
    left: position.x,
    width: '100px',
    height: '100px',
    backgroundColor: 'green',
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
  };

  const handleDragEnd = (event) => {
    const { delta } = event;

    // Update position based on drag delta
    setPosition((prev) => ({
      x: Math.max(0, Math.min(prev.x + delta.x, window.innerWidth - 100)), // Limit width
      y: Math.max(0, Math.min(prev.y + delta.y, window.innerHeight - 100)), // Limit height
    }));
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} onDragEnd={handleDragEnd}>
      Drag me (Green)
    </div>
  );
};

export default Magnet;
