// Helper function to calculate the square of a number
function square(number) {
    return number * number;
  }
  
  // Helper function to calculate the hypotenuse of a right triangle
  function calculateHypotenuse(a, b) {
    const squaredSum = square(a) + square(b);
    return Math.sqrt(squaredSum);
  }
  
  // Example of usage:
  const sideA = 3;
  const sideB = 4;
  const hypotenuse = calculateHypotenuse(sideA, sideB);
  console.log(`The hypotenuse of the right triangle with sides ${sideA} and ${sideB} is: ${hypotenuse}`);
  