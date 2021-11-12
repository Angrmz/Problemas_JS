let num1 = prompt("Introduzca numero 1:");
let num2 = prompt("Introduzca numero 2:");

  console.log("\n1.- SUMAR\n");
  console.log("2.- RESTAR\n");
  console.log("3.- MULTIPLICAR\n");
  console.log("4.- DIVIDIR\n");
  
  let opc = prompt("Introduzca opcion:");
  
  switch (opc) {
    case "1":
    	let suma = num1 + num2;
    	console.log("La suma es:" + suma);
    case "2":
    	let resta = num1 - num2;
      console.log("La resta es:" + resta);
      break;
    case "3":
    	let mult = num1 * num2;
      console.log("La multiplicación es:" + mult);
      break;
    case "4":
    	let div = num1 / num2;
      console.log("La división es:" + div);
      break;
    default:
      console.log("Opcion no valida");
	}
