function isCorrectTime(n) {
  var nNumber = parseFloat(n);
  return !isNaN(nNumber) && (nNumber > 100);
}

var number = prompt("Enter number more 100","");

while (!isCorrectTime(number) && number != null) {
  number = prompt("Please, enter number again. Enter number more 100","101");
}