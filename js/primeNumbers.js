var number = prompt("Enter number more 1","");
var ourPrimeNumbers = [];

while (!isCorrectTime(number) && number != null) {
  number = prompt("Please, enter number again. Enter number more 1","2");
}

showAllPrimeNumbersTo(number);

function isCorrectTime(n) {
  var nNumber = parseFloat(n);
  return !isNaN(nNumber) && (nNumber > 1);
}

function showAllPrimeNumbersTo(num) {
  var numericN = Number(num);
  outer:
  for (var i = 2; i <= numericN; i++) {
    for (var j = 2; j < i; j++) {
      if (i % j === 0) { 
        continue outer;
      }
    }
   ourPrimeNumbers.push(i);
  }
  console.log('Prime numbers from 2 to ' + num + ': ' + ourPrimeNumbers);
}