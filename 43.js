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

let map = new Map();
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
    map.set(obj.id, obj);
    fr.close();
}).on('close',()=>{
    rl.question("Ingrese ID a modificar:", (answer) => {
        let data = answer.split(',');
        processObj(map.get(data[0]),data[1].toLowerCase(),data[2]);
        for (c of map.values()) {
            fs.writeFileSync('./DATOS.DAT', JSON.stringify(c));
        }
        rl.close();
    });
});
