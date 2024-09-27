import { scaleValue } from "./scaleValue";

export const scaleInitialPositions = (initialMagnets) => {
  
  const { scaleValueX, scaleValueY } = scaleValue()

  const scaledMagnets = initialMagnets.map((magnet) => ({
    ...magnet,
    position: {
      x: magnet.position.x * scaleValueX,
      y: magnet.position.y * scaleValueY,
    },
  }));

  return scaledMagnets;
};
