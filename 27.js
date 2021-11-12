var num = 0;
num = prompt("Ingrese un numero:");

function mult(num){
  console.log("Tabla de multiplicar del " + num + ":");
  for (var i = 0; i < 11; i++) {
    console.log(num + " x " + i + " = " + (i*num));
  }
}

mult(num);
