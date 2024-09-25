// src/components/DnDContainer.js
import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { Draggable } from './Draggable';

const DnDContainer = () => {
  const [items, setItems] = useState([
    { id: '1', content: 'Drag me 1', top: 0, left: 0 },
    { id: '2', content: 'Drag me 2', top: 100, left: 100 },
    { id: '3', content: 'Drag me 3', top: 200, left: 200 },
  ]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    // If dropped outside of bounds, do nothing
    if (!over) {
      return;
    }

    // Get the bounding client rect of the container
    const container = document.querySelector('#dnd-container');
    const containerRect = container.getBoundingClientRect();

    // Calculate new position for the dragged item
    const newTop = Math.max(0, Math.min(event.delta.y + parseFloat(items.find(item => item.id === active.id).top), containerRect.height - 100));
    const newLeft = Math.max(0, Math.min(event.delta.x + parseFloat(items.find(item => item.id === active.id).left), containerRect.width - 100));

    // Update the items state with the new position of the dragged item
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === active.id
          ? { ...item, top: newTop, left: newLeft }
          : item
      )
    );
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div
        id="dnd-container"
        style={{
          width: '100%',
          height: '100vh',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {items.map((item) => (
          <Draggable
            key={item.id}
            id={item.id}
            style={{
              top: item.top,
              left: item.left,
            }}
          >
            {item.content}
          </Draggable>
        ))}
      </div>
    </DndContext>
  );
};

export default DnDContainer;
