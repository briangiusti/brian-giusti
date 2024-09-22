import React from "react";
import { useDraggable } from "@dnd-kit/core";

export default function LetterMagnet({ position, id, src, style }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const mergedStyle = {
    ...style, // Default styles passed from parent (width, height, etc.)
    position: "absolute",
  top: position.y,
  left: position.x,
  transform: transform
    ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
    : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <img src={src} alt="My Image" style={mergedStyle}/>
    </div>
  );
}