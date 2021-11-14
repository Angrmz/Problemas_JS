const fs = require('fs');
const readline = require('readline');

function processObj(obj,atr,valor){
    switch (atr){
        case 'Nombre':
            obj.Nombre = valor;
            break;
        case 'Apellido':
            obj.Apellido = valor;
            break;
        case 'Direccion':
            obj.Direccion = valor;
            break;
        case 'Estado':
            obj.Estado = valor;
    }
}

let list = new Array();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fr = readline.createInterface({
    input: fs.createReadStream('./DATOS.DAT'),
    crlfDelay: Infinity
});

fr.on('line', (line) => {
    let obj = JSON.parse(line);
    list.push(obj);
    fr.close();
}).on('close',()=>{
    rl.question("Ingrese estado: ", (answer) => {
        let data = answer.split(',');
        let filtered = list.filter(e => e.state.toLowerCase() === answer.toLowerCase());
        for(c of filtered){
            console.log(c);
        }
        rl.close();
    });
});
