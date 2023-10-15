//program to calculate simple interest based on principal, rate, and time.

function calculateSimpleInterest(principal, rate, time) {
  // Simple Interest formula: SI = (P * R * T) / 100
  const simpleInterest = (principal * rate * time) / 100;
  return simpleInterest;
}

// Example values
const principalAmount = 1000; // Principal amount in dollars
const annualInterestRate = 5; // Annual interest rate in percent
const timeInYears = 2; // Time in years

// Calculate simple interest
const interest = calculateSimpleInterest(principalAmount, annualInterestRate, timeInYears);

// Print the result
console.log('Simple Interest:', interest);

