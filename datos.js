//const estudiante1 = require('./calculos');
const {estudiante, obtenerPromedio} = require('./calculos');

console.log('El nombre de estudiante es ' + estudiante.nombre);
console.log('El promedio del estudiante es '+ obtenerPromedio (estudiante.notas.matematicas, estudiante.notas.ingles, estudiante.notas.programacion));
console.log('');

let {nombre, edad: anos, notas: {matematicas, ingles, programacion}} = estudiante;
console.log('El nombre del estudiante es '+ nombre);
console.log('El promedio del estudiante es '+ obtenerPromedio (matematicas, ingles, programacion));
console.log('El edad del estudiante es ' + anos);
console.log('');

const fs = require('fs');

const crearArchivo = (estudiante) =>{
    texto = 'El nombre del estudiante es ' + nombre +'\n'+
            'Ha obtenido un promedio es ' + obtenerPromedio(matematicas, ingles, programacion);
    fs.writeFile('promedio.txt', texto, (err) => {
        if(err) throw (err);
        console.log('Se ha creado el archivo');
    });
}

crearArchivo (estudiante);