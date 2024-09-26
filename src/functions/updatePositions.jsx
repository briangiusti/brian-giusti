import { scalePositions } from "./scalePositions";

export const updatePositions = (setMagnets) => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const boundsScaler = scalePositions()

  setMagnets((prevMagnets) =>
    prevMagnets.map((magnet) => ({
      ...magnet,
      position: {
        x: Math.max(0, Math.min(magnet.position.x, windowWidth - boundsScaler)),
        y: Math.max(0, Math.min(magnet.position.y, windowHeight - boundsScaler)),
      },
    }))
  );
};

