function primo(num){
  for (var i = 2; i < num; i++) {
    if (num % 1 == 0) {
      return false;
    }
  }
  return num + 1;
}

var num = prompt("Introduzca un numero:");
if (primo(num)||primo(num + 1)) {
  console.log("Numero es primo");
}else {
  console.log("Numero no es primo");
}
