let num = prompt("Introduzca un numero:");

if (primo(num)||primo(num + 1)) {
  console.log("\nEl Numero es primo");
}else {
  console.log("El Numero no es primo");
}

console.log("\nEl factorial es:" + factorial(num));

function primo(num){
  for (var i = 2; i < num; i++) {
    if (num % 1 == 0) {
      return false;
    }
  }
  return num + 1;
}

function factorial(num){
  if(num < 0){
    return null;
  }else if (num == 0) {
    return 1;
  }else {
    return(num * factorial(num - 1));
  }
}

function mult(num){
  console.log("Tabla de multiplicar del " + num + ":");
  for (var i = 0; i < 11; i++) {
    console.log(num + " x " + i + " = " + (i*num));
  }
}

mult(num);
