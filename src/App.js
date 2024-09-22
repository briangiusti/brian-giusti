import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Magnet from "./Magnet";
import useWindowResize from "./hooks/useWindowResize";
import { initialMagnets } from "./magnetData";
import { handleDragEnd } from "./functions/handleDrag";
import { updatePositions } from "./functions/updatePositions";
import LetterMagnet from "./LetterMagnet";
import "./fridge.css";

function App() {
  const [magnets, setMagnets] = useState(initialMagnets);

  useWindowResize(() => updatePositions(setMagnets));

  return (
    <DndContext
      onDragEnd={(event) => handleDragEnd(event, magnets, setMagnets)}
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
  );
}

export default App;

//images for the letters -> make an array of them so they are all mapped on their own and thus able to be moved
//but start with them all in a container to start so you only need to set the position once per word
//or you can just base the math based on the starting point of the initial letter of each word, then add a % of pixels per.
// youd have to do it on mobile and on desktop but it would be more fun
