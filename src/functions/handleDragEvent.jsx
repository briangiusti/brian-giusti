export const handleDragEvent = (event, magnets, setMagnets) => {
  const { active, delta } = event;

  setMagnets((prevMagnets) =>
    prevMagnets.map((magnet) =>
      magnet.id === active.id
        ? {
            ...magnet,
            position: {
              x: Math.max(0, Math.min(magnet.position.x + delta.x, window.innerWidth - 100)),
              y: Math.max(0, Math.min(magnet.position.y + delta.y, window.innerHeight - 100)),
            },
          }
        : magnet
    )
  );
};
