export const updatePositions = (setMagnets) => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  setMagnets((prevMagnets) =>
    prevMagnets.map((magnet) => ({
      ...magnet,
      position: {
        x: Math.max(0, Math.min(magnet.position.x, windowWidth - 100)),
        y: Math.max(0, Math.min(magnet.position.y, windowHeight - 100)),
      },
    }))
  );
};

