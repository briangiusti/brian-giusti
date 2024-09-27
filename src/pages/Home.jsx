
import React from 'react';
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { useState } from 'react';
import LetterMagnet from "../components/LetterMagnet"
import { initialMagnets } from "../data/magnetData"
import { updatePositions } from "../functions/updatePositions"
import useWindowResize from "../hooks/useWindowResize"
import { handleDragEvent } from "../functions/handleDragEvent"
import { scaleInitialPositions } from "../functions/scaleInitialPositions"
import "../styles/fridge.css"

const Home = () => {
  const [magnets, setMagnets] = useState(scaleInitialPositions(initialMagnets));

  useWindowResize(() => updatePositions(setMagnets));

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(KeyboardSensor, {coordinateGetter: sortableKeyboardCoordinates}),
  );

  return (
    <DndContext
      onDragEnd={(event) => handleDragEvent(event, magnets, setMagnets)}
      sensors={sensors}
    >

      <div className="refrigerator-container">
        <div className="freezer">
          <div className="freezer-handle"></div>
          {magnets.map((magnet) => (
            <LetterMagnet
              key={magnet.id}
              id={magnet.id}
              src={magnet.src}
              position={magnet.position}
              style={magnet.style}
            />
          ))}
        </div>
        <div className="fridge">
          <div className="fridge-handle"></div>
        </div>
      </div>
    </DndContext>
  )
};

export default Home;