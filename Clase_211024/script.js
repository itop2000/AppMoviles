//Suma entre 2 números difrentes
function mifuncion (a,b){
    return a+b;
}

console.log (mifuncion(2,3))

//estructura de función flecha 
let salu2 = () => {};
let saludo = (nombre) => {
    return 'Saludos ' + nombre;
}
//Da entrada de datos, para saber
console.log (saludo ('Juan'));


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let saludar = nombre => 'Saludos' + nombre;

console.log (saludar ('Ramiro'));


// pasar parametros

let suma = (a,b) => a+b;
console.log (suma (5,8));

// crear un bojeto en funcióon flecha

let obj = () => ({nombre: 'Roberto, edad 2'})

//let persona = obj().nombre;
console.log (obj().nombre);
 let arrFunc = () => [1,2,3,4,5,];

 //accediendo al arreglo
 console.log (arrFunc()[4]);
 