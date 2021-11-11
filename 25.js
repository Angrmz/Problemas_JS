var num = prompt("Introduzca numero:");
var romano = "";
var i = 0;

function numromano (num) {
    var numero = String(+num).split("");
    key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"];
    i = 3;

    while (i--) {
      romano = (key[+numero.pop() + (i * 10)] || "") + romano;
    }
    return Array(+numero.join("") + 1).join("M") + romano;
}

if (num < 1 || num > 5000) {
  console.log("Numero tiene que ser mayor a 0 y menor a 5000");
}else{
  console.log(numromano(num));
}
