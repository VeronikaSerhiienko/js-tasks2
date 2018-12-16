showEntriesOfLetter("WikipediA is A free online encyclopedia, created and edited by volunteers around the world", "A");

function showEntriesOfLetter(str, letter) {
  var position = 0;
  var count = 0;
  var lowerStr = str.toLowerCase();
  var lowerLetter = letter.toLowerCase();
  while (true) {
    var foundPosition = lowerStr.indexOf(lowerLetter, position);
      if (foundPosition == -1) {
        break; 
      }
      count++;
      position = foundPosition + 1; 
  }
  console.log("AmountOfEntries "+ letter + " into " + str + " : " + count);
}