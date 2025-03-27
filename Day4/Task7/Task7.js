// <!-- Create a local text file that contains words in it. Using JavaScript read the words
// from a text file and create a recursive function that identifies the very first item
// that has recurred in the word. It returns the identified item with the index where it
// first appeared and the very next index where it reappeared - entirely as an object.
// Ex.first word from file - “BTEJHBERSD” ➞ {“E”: [2, 6]}
// 2nd word from file - “JPDETRETXD” ➞ {“E”:[3, 6]}
// … and go on. -->
const fs = require("fs");
const prompt = require("prompt-sync")();
fs.readFile("local.txt", (err, data) => {
  if (err) throw err;
  words = data.toString().toUpperCase().split(" ");
  console.log(data.toString());
  m = prompt("ENTER DATA:");
  m = m.toUpperCase();

  let word_dictionary = {};

  for (word = 0; word < words.length; word++) {
    console.log("*");
    let value = [];
    let dictionary = {};
    for (j = 0; j < words[word].length; j++) {
      console.log("word", words[word][j]);
      if (words[word][j] == m) {
        console.log(`${j} word`, words[word][j]);
        value.push(j);
      }
      console.log("value", value);
      dictionary[m] = value;
      console.log("1dic", dictionary);
    }
    word_dictionary[words[word]] = dictionary;
    console.log("2dic", word_dictionary);
    console.log("fininsh");
    console.log();
  }
  console.log(word_dictionary);
});
