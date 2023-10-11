//Write a program to generate a sequence of random numbers within a given range. 

function generateRandomSequence(start, end, count) {
  // Check if the range is valid
  if (start >= end) {
    throw new Error("Invalid range. 'start' must be less than 'end'.");
  }

  const randomSequence = [];
  for (let i = 0; i < count; i++) {
    const randomNum = Math.floor(Math.random() * (end - start) + start);
    randomSequence.push(randomNum);
  }

  return randomSequence;
}

const startRange = 1;
const endRange = 100;
const numCount = 10;

const randomNumbers = generateRandomSequence(startRange, endRange, numCount);
console.log("Random numbers:", randomNumbers);
