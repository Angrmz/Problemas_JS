let cursos = {
    Informatica: [{ Nombre: 'Jose', Nota: 3 },{ Nombre: 'Manuel', Nota: 7 },{ Nombre: 'David', Nota: 10 }],
    Algebra: [{ Nombre: 'Paco', Nota: 8 },{ Nombre: 'Maria', Nota: 8 },{ Nombre: 'Jose', Nota: 10 },{ Nombre: 'Mariana', Nota: 7 }],
    Ingles:[{ Nombre: 'Natalia', Nota: 9 }]
}

let ls = [];
for (materia in cursos) {
    ls.push(cursos[materia]);
}

ls.sort((a,b) => {
    if(a.length === b.length) return 0;
    return (a.length < b.length) ? -1 : 1;
});

ls.forEach((materia) => {
    materia.forEach((alumno) => {
        console.log(`Nombre: ${alumno.Nombre}, Calificacion: ${alumno.Nota}`);
    });
});
