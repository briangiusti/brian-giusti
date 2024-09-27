// Function to handle different breakpoints
function onBreakpointCrossed(size) {
    if (size === 'small') {
      console.log('Small screen detected (below 481px)');
    } else if (size === 'medium') {
      console.log('Medium screen detected (481px - 768px)');
    } else if (size === 'large') {
      console.log('Large screen detected (above 768px)');
    }
  }
  
  // Media queries for different breakpoints
  const smallScreenQuery = window.matchMedia('(max-width: 480px)');
  const mediumScreenQuery = window.matchMedia('(min-width: 481px) and (max-width: 768px)');
  const largeScreenQuery = window.matchMedia('(min-width: 769px)');
  
  // Handle small screen
  function handleSmallScreen(e) {
    if (e.matches) onBreakpointCrossed('small');
  }
  
  // Handle medium screen
  function handleMediumScreen(e) {
    if (e.matches) onBreakpointCrossed('medium');
  }
  
  // Handle large screen
  function handleLargeScreen(e) {
    if (e.matches) onBreakpointCrossed('large');
  }
  
  // Add event listeners to detect breakpoint changes
  smallScreenQuery.addEventListener('change', handleSmallScreen);
  mediumScreenQuery.addEventListener('change', handleMediumScreen);
  largeScreenQuery.addEventListener('change', handleLargeScreen);
  
  // Initial check when the page loads
  handleSmallScreen(smallScreenQuery);
  handleMediumScreen(mediumScreenQuery);
  handleLargeScreen(largeScreenQuery);
  