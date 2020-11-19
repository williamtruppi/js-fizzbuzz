// creazione array
var arrayNum = [];
var firstArray = document.getElementById("first_array");
var lastArray = document.getElementById("last_array");

//popolamento array
for( var i=0; i < 100; i++){
  arrayNum.push(i+1);
}
console.log(arrayNum);
firstArray.innerHTML = "Array iniziale: " + arrayNum;

//controllo multipli
for( var i=0; i < 100; i++){
  if (((arrayNum[i] % 3) == 0) && ((arrayNum[i] % 5) == 0)){
    arrayNum[i] = "FizzBuzz";
  } else if ((arrayNum[i] % 5) == 0){
    arrayNum[i] = "Buzz";
  } else if ((arrayNum[i] % 3) == 0){
    arrayNum[i] = "Fizz";
  }
}

//STAMPA RISULTATO SU HTML
console.log(arrayNum);
lastArray.innerHTML = "Array MODIFICATO: " +  arrayNum;
