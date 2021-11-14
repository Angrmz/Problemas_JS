let id;
let nombre;
let apellido;
let direccion;
let estado;
const Data = require('./Data');
const fs = require('fs');
const rl = require('readline-sync');
id = rl.question("Ingrese ID: ");
nombre = rl.question("Ingrese nombre: ");
apellido = rl.question("Ingrese apellido: ");
direccion = rl.question("Ingrese direccion: ");
estado = rl.question("Ingrese estado: ");

let json = JSON.stringify(new Data(id,nombre,apellido,direccion,estado));

fs.writeFileSync('./DATOS.DAT',json);
