import React from "react";
import { useDraggable } from "@dnd-kit/core";
import "../styles/LetterMagnet.css"

export default function LetterMagnet({ position, id, src }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const mergedStyle = {
    top: position.y,
    left: position.x,
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  return (
    <div 
      ref={setNodeRef} 
      style={mergedStyle} 
      className="letterMagnet"
      {...listeners} 
      {...attributes}
    >
      <img src={src} alt="My Image" style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
