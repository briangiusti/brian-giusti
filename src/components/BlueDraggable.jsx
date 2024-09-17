import React from 'react';
import { useDraggable } from '@dnd-kit/core';

export default function BlueDraggable({ position }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'blue-draggable',
  });

  // Apply the transformation
  const style = {
    width: '100px',
    height: '100px',
    backgroundColor: 'blue',
    cursor: 'grab',
    position: 'absolute',
    top: position.y,
    left: position.x,
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      Drag Me (Blue)
    </div>
  );
}