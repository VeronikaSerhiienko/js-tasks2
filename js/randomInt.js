function showRandomInt(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

var randomInt = showRandomInt(1, 3);
console.log("Random number is " + randomInt);