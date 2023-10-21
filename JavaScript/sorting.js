const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter space-separated numbers: ', (input) => {
  // Split the input into an array of numbers
  const numbers = input.split(' ').map(Number);

  // Sort the array in descending order
  numbers.sort((a, b) => b - a);

  // Print the sorted array
  console.log('Sorted in descending order:', numbers);

  rl.close();
});
