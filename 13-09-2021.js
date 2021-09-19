alert("2421IS");

var palabra = prompt("Ingrese la palabra");
var elemento1 = [1,2,3,4,5,6,78,9,70];
var elemento2 = [10,5,4,8,7,7,10,2,1];

 
var contenedor = [];
var organizar = elemento1.length -1; 

for(var i=0; i < elemento1.length; i++){

    contenedor.push(palabra[i]);

    if(elemento1[1] == elemento2[organizar])
    console.log("iguales");
    else
    console.log("no iguales");

    //contrario--;
}
console.log(contenedor);
