// src/components/Draggable.js
import React from 'react';
import { useDraggable } from '@dnd-kit/core';

export function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });

  const style = {
    position: 'absolute', // Allows free movement
    width: '100px',
    height: '100px',
    backgroundColor: 'lightblue',
    border: '1px solid #333',
    cursor: 'grab',
    userSelect: 'none',
    ...(transform ? {
      transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : {}),
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </div>
  );
}
