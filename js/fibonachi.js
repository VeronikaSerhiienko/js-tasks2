var nthFibonachiNumber = showNthFibonachiNumber(7);
console.log(nthFibonachiNumber);
var nthFibonachiNumberCycle = showNthFibonachiNumber(7);
console.log(nthFibonachiNumberCycle);

function showNthFibonachiNumber(n) {
  return n <= 1 ? n : showNthFibonachiNumber(n - 1) + showNthFibonachiNumber(n - 2);
}

function showNthFibonachiNumberCycle(n) {
  var lastLast = 1;
  var last = 1;
  for (var i = 3; i <= n; i++) {
    var current = lastLast + last;
    lastLast = last;
    last = current;
  }
  return last;
}