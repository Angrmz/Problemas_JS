let count = 0;
let str = "";

for (var pag = 0; pag < 3; pag++) {
  str += `\nTabla #${pag+1}\n`;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 5; j++) {
      str += `${++count}\t`;
    }
    console.log("\t");
    str += "\n";
  }
}

console.log(str);
