
import { useEffect } from 'react';

const useWindowResize = (updatePositions) => {
  useEffect(() => {
    window.addEventListener('resize', updatePositions);
    return () => {
      window.removeEventListener('resize', updatePositions);
    };
  }, [updatePositions]);
};

export default useWindowResize;