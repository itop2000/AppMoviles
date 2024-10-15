//alert("hala");

//Funciones
/*
function hello (){
    //console.log('hi');
    return()




}

hello();
hello()
hello();




function hello (){
    return "hola js";


}

const result = hello();
console.log(hello());
//hello();


function hello (){
    return {
        nombre: 'Angel'

    }


}

console.log(hello());


//paradicgma reac

function hello(){
    return function (){
        return 'hola JS'
    }

}
console.log(hello()());



//uso de parametros en funciones

function hekkpconJS(name){
    return 'hola' + name

}
console.log('Angel');
console.log('Sirgay'):


//pasar más de un parametro a la función

function hellopcanJS(x,y){
    return  x + y;



}
console.log(hellopcanJS(10,20));
console.log(hellopcanJS(10));

//control de errores
function hellopcanJS(x,y){
    if(y == undefined);{

        y=0;
    }



}
console.log(hellopcanJS(10));

function hellopcanJS(x,y=0){
    return x + y;

        y=0;
    }

*/
//Objetos

const user ={

    //x : 20, 
    nombre : 'Angel',
    apellidoM : 'Moreno',
    edad : 15,
    domicilio : {
        ciudad : 'CDMX',
        calle : 'Fco. Villa',
        num : 100036




    },
    amigos: ['Arturo, Angel, Poncho,  Juan'],
    activo: false,
    sendMensaje : function(){
        return 'enviado msj'


    }

}
//alert ciudad, calla, num....
//alert(activo o Dado de baja)
//consola nombre,  apellido, estado civill...¡¡¡¡¡
//alert (estado de mensaje)

alert(`${user.domicilio.ciudad}, ${user.domicilio.calle} ${user.domicilio.numero}`)
console.log(user.amigos);
alert(user.activo)
console.log(`${user.nombre} ${user.apellidoM}, ${user.estadoCivil}`);
alert(user.sendMensaje())

