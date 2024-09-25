// src/pages/Home.js
import React from 'react';
import { DndContext } from '@dnd-kit/core';
import { useState } from 'react';
import LetterMagnet from "../components/LetterMagnet"
import { initialMagnets } from "../data/magnetData"
import { updatePositions } from "../functions/updatePositions"
import useWindowResize from "../hooks/useWindowResize"
import { handleDragEvent } from "../functions/handleDragEvent"
import "../styles/fridge.css"
import { sensors } from '../functions/sensors';


const Home = () => {
  const [magnets, setMagnets] = useState(initialMagnets);

  useWindowResize(() => updatePositions(setMagnets));

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