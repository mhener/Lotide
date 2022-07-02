// Outcome is to return all of the indicies in the string where the character is found
const letterPositions = function(sentence) {
  // create an empty object
  const results = {};
  //cleaning up the sentence:
  const newSentence = sentence.split(' ').join('').toLowerCase();
  // console.log(newSentence); // to test out our sentence
  for (let i = 0; i < newSentence.length; i++) { // we are looping over every letter of the newSentence length
    if (results[sentence[i]]) { // if there exists a letter [i] in the sentence
      results[sentence[i]].push(i); // we will push the value of i to the result {} x amount of times
    } else { // else if once than just simply i
      results[sentence[i]] = [i];
    }
  }
  return results;
};

letterPositions('have a nice day');gi