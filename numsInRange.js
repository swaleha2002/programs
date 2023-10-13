//program to generate a sequence of random numbers within a given range.

function generateRandomSequence(start, end, length) {
    const randomSequence = [];

    for (let i = 0; i < length; i++) {
        const randomNum = Math.floor(Math.random() * (end - start + 1)) + start;
        randomSequence.push(randomNum);
    }

    return randomSequence;
}

const startRange = 1; 
const endRange = 100;  
const sequenceLength = 10; 

const randomSequence = generateRandomSequence(startRange, endRange, sequenceLength);
console.log("Random sequence:", randomSequence);
