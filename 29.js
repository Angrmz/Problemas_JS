let count = 0;

for (let i = 0; i < 100; i++) {
	let num1 = 1 + Math.floor(Math.random() * 5);
	let num2 = 1 + Math.floor(Math.random() * 5);
  if (num1 + num2 == 10) {
    count++;
  }
}

console.log("La cantidad de veces que entre los 2 suman 10 es: " + count);
