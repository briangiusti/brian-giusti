// dragHandlers.js
export const handleDragEnd = (event, position, setPosition, bluePosition, setBluePosition) => {
    const { active, delta } = event;
  
    // Get window dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
  
    // Update position for the green square
    if (active.id === 'green-draggable') {
      const newX = Math.max(0, Math.min(position.x + delta.x, windowWidth - 100)); // Limit width
      const newY = Math.max(0, Math.min(position.y + delta.y, windowHeight - 100)); // Limit height
      setPosition({ x: newX, y: newY });
    }
  
    // Update position for the blue square
    if (active.id === 'blue-draggable') {
      const newX = Math.max(0, Math.min(bluePosition.x + delta.x, windowWidth - 100)); // Limit width
      const newY = Math.max(0, Math.min(bluePosition.y + delta.y, windowHeight - 100)); // Limit height
      setBluePosition({ x: newX, y: newY });
    }
  };
  