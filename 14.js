let count = 1;
let num = 0;
let min = -99999;
let max = 99999;

while (count <= 5) {
  num = prompt("Introducir numero:");
  
  if (num < max) {
    max = num;
  }

  if(num > min){
    min = num;
  }
  count = count + 1;
}

console.log("El numero mayor introducido es:", min);
console.log("El numero menor introducido es:", max);
