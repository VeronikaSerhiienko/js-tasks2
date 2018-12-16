var ourPrimeNumbers = [];

showAllPrimeNumbersTo(8);

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