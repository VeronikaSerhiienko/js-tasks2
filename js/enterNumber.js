var number = prompt("Enter number more 100","");

while (!isCorrectData(number) && number != null) {
  number = prompt("Please, enter number again. Enter number more 100","101");
}

function isCorrectData(n) {
  var nNumber = parseFloat(n);
  return !isNaN(nNumber) && (nNumber > 100);
}