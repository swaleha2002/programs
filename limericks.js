//Write a program to generate random limericks.
function generateRandomLimerick() {
  const line1 = [
    "There once was a man from",
    "In a land where the skies were",
    "A fellow from a quaint little",
    "In a town by the shimmering"
  ];

  const line2 = [
    "With a hat made of",
    "Who loved to",
    "With a fondness for",
    "Who danced in the light of the"
  ];

  const line3 = [
    "He would skip and he'd",
    "He'd frolic and",
    "He would sing and",
    "He'd waltz and he'd"
  ];

  const line4 = [
    "And shout with sheer",
    "With laughter so",
    "With a heart so",
    "With a smile so"
  ];

  const line5 = [
    "For a life that was truly",
    "In a world that was so",
    "In a way that was so",
    "For a love that was always"
  ];

  // Generate a random limerick using random selections from the lists
  const limerick = `
    ${line1[Math.floor(Math.random() * line1.length)]}
    ${line2[Math.floor(Math.random() * line2.length)]}
    ${line3[Math.floor(Math.random() * line3.length)]},
    ${line4[Math.floor(Math.random() * line4.length)]} glee,
    ${line5[Math.floor(Math.random() * line5.length)]}
    ${line1[Math.floor(Math.random() * line1.length)]}
    ${line2[Math.floor(Math.random() * line2.length)]}.`;

  return limerick;
}

// Generate and display a random limerick
const randomLimerick = generateRandomLimerick();
console.log("Random Limerick:\n", randomLimerick);
