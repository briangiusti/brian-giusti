
import { useEffect } from 'react';

const useWindowResize = (updatePositions) => {
  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener('resize', updatePositions);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', updatePositions);
    };
  }, [updatePositions]);
};

export default useWindowResize;