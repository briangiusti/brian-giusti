import { scalePositions } from "./scalePositions";

export const handleDragEvent = (event, magnets, setMagnets) => {
  const { active, delta } = event;

  const boundsScaler = scalePositions()

  setMagnets((prevMagnets) =>
    prevMagnets.map((magnet) =>
      magnet.id === active.id
        ? {
            ...magnet,
            position: {
              x: Math.max(0, Math.min(magnet.position.x + delta.x, window.innerWidth - boundsScaler)),
              y: Math.max(0, Math.min(magnet.position.y + delta.y, window.innerHeight - boundsScaler)),
            },
          }
        : magnet
    )
  );
};

/*
magnets is the array of objects
setMagnets is the setter for that array
search through the array of magnets by id and match it to the event id
if the don't match return the magnet and keep looking
if they do then spread the other magnet data on the object and update the position

current pos + the change 

to do a bounds check use Math.min and do the window width - whatever the width of the img is
do the same thing with the left bounds with max

do same for top bot y coords

*/