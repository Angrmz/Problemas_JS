function factorial(num){
  if(num < 0){
    return null;
  }else if (num == 0) {
    return 1;
  }else {
    return(num * factorial(num - 1));
  }
}

fact = prompt("Introduzca un numero:");
console.log("El factorial es:", factorial(fact));
