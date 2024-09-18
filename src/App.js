import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Magnet from "./Magnet";
import useWindowResize from "./hooks/useWindowResize";
import { initialMagnets } from "./magnetData";
import { handleDragEnd } from "./functions/handleDrag";
import { updatePositions } from "./functions/updatePositions";

function App() {
  const [magnets, setMagnets] = useState(initialMagnets);

  // Use the custom hook to update positions on resize
  useWindowResize(() => updatePositions(setMagnets));

  return (
    <DndContext
      onDragEnd={(event) => handleDragEnd(event, magnets, setMagnets)}
    >
      {magnets.map((magnet) => (
        <Magnet
          key={magnet.id}
          id={magnet.id}
          color={magnet.color}
          position={magnet.position}
          title={magnet.title}
        />
      ))}
    </DndContext>
  );
}

export default App;
