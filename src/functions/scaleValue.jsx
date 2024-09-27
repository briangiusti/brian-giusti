export const scaleValue = () => {
    const totalScreenWidth = window.innerWidth;
    let scaleValueX = 2.5
    let scaleValueY = 2.5
  
    if (totalScreenWidth < 480) {
      scaleValueX = 1.1
      scaleValueY = 1.1
    } else if (totalScreenWidth < 768) {
      scaleValueX = 1.3
      scaleValueY = 1.3
    }
    else if (totalScreenWidth < 1280) {
      scaleValueX = 1.75
      scaleValueY = 1.75
    }
    return {scaleValueX, scaleValueY}
}