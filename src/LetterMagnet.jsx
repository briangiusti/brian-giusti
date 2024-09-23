import React from "react";
import { useDraggable } from "@dnd-kit/core";

export default function LetterMagnet({ position, id, src }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const magnetStyle = {
    top: `${position.y}px`,
    left: `${position.x}px`,
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      className="magnet"
      style={magnetStyle}
      {...listeners}
      {...attributes}
    >
      <img src={src} alt="Letter Magnet" style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
