export const updatePositions = (currentPosition,setPositionFunction) => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Ensure draggable items stay within bounds
    setPositionFunction((prev) => ({
      x: Math.max(0, Math.min(prev.x, windowWidth - 100)), // Limit width
      y: Math.max(0, Math.min(prev.y, windowHeight - 100)), // Limit height
    }));
  };

