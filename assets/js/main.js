// creazione array
var arrayNum = [];
var firstArray = document.getElementById("first_array");
/* var lastArray = document.getElementById(first_array); */

for( var i=0; i < 100; i++){
  arrayNum.push(i+1);
  firstArray.innerHTML = arrayNum;
}

console.log(arrayNum);
