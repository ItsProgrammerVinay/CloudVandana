const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a sentence: ', (sentence) => {
  const reversedSentence = reverseWordsInSentence(sentence);
  console.log('Reversed Sentence:', reversedSentence);
  rl.close();
});

function reverseWordsInSentence(sentence) {
  const words = sentence.split(' ');
  const reversedWords = words.map(reverseWord);
  return reversedWords.join(' ');
}

function reverseWord(word) {
  // Reverse the characters in the word
  return word.split('').reverse().join('');
}
