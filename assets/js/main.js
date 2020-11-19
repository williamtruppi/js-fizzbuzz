// creazione array
var arrayNum = [];

//popolamento array
for( var i=0; i < 100; i++){
  arrayNum.push(i+1);
  var firstArrayItem = arrayNum[i];
  var firstArray = document.getElementById("first_array").innerHTML;
  document.getElementById("first_array").innerHTML = firstArray + "<li>" + firstArrayItem + "</li>";
}

console.log(arrayNum);

//controllo multipli
for( var i=0; i < 100; i++){
  if (((arrayNum[i] % 3) == 0) && ((arrayNum[i] % 5) == 0)){
    arrayNum[i] = "<strong>" + "FizzBuzz" + "</strong>";
  } else if ((arrayNum[i] % 5) == 0){
    arrayNum[i] = "Buzz";
  } else if ((arrayNum[i] % 3) == 0){
    arrayNum[i] = "Fizz";
  }

  var lastArrayItem = arrayNum[i];
  var lastArray = document.getElementById("last_array").innerHTML;
  document.getElementById("last_array").innerHTML = lastArray + "<li> -----> " + lastArrayItem + "</li>";
}

//STAMPA RISULTATO SU HTML
console.log(arrayNum);
