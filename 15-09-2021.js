var elemento = [];
var colores=["red","green", "blue","yellow"];

console.log(colores[2]);

var animales ={
    perro:"Firulais",
    gato: "Micho",
    raton: "Rata"
};

console.log(animales["gato"]);

var humano = {
    "Informacion":{
        "nombre": "Erik",
        "edad":19, 
        "carrera": "Software"
    },
    "Gustos":{
        "musica":{
            "Rock":{
                "Artista":{
                    "Cancion":{
                        "Duracion":{
    
                        }
                    }
                }
            }
        },
        "Peliculas":{
            "Comedia":{
                "Nombre":{
                    "Tematica":{
                        "Director":{
                            "Duracion":{
    
                            }
                        }
                    }
                }
            }
        },
        "Videouegos":{
            "Genero":{
                "Tipo":{
                    "Plataforma":{
                        "Nombre":{
                            "Divertido":{
    
                            }
                        }
                    }                 
                }
            }
        },
    },
}
console.log(humano);


function evento(){
    let recuperado=document.getElementById(a).value;
    alert(a);
}
evento();