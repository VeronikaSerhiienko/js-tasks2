function isCorrectTime(n) {
  var nNumber = parseFloat(n);
  return !isNaN(nNumber) && (nNumber > 1);
}

var number = prompt("Enter number more 1","");

while (!isCorrectTime(number) && number != null) {
  number = prompt("Please, enter number again. Enter number more 1","2");
}

var ourPrimeNumbers = [];
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

showAllPrimeNumbersTo(number);