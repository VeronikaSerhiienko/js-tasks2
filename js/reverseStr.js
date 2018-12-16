reverseStr("WikipediA is A free online encyclopedia, created and edited by volunteers around the world");

function reverseStr(str) {
  var reversedStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  console.log(reversedStr);
}