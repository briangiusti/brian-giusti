export const scalePositions = () => {
    
    const totalScreenWidth = window.innerWidth
  
    switch(totalScreenWidth) {
        case totalScreenWidth < 481:
          return 50

        case totalScreenWidth < 769:
          return 75

        default:
          return 100
      } 
  };
  
  /*
  mobile  0-480
  tablet 481 - 768
  middle 769 - 1279
  desktop 1280+ 
  
  */