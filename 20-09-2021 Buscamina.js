var arregloimagenes = new Array();

function bomba(){
    var i;
    var bombaunica;
    for(i=0; i<25; i++){
        arregloimagenes[i]="imagenes/casilladescubierta.jpg";
    }
    for(i=0;i<4; i++){
        do{
            bombaunica = Math.floor(Math.random()*25);
        }while (arregloimagenes[bombaunica]!="imagenes/casilladescubierta.jpg")
        arregloimagenes[bombaunica] ="imagenes/bomba.jpg";
    }
}
function volverajugar(){
    var i;
    for(i=0;i<25;i++){
        document.getElementById(i).src="imagenes/casilla.jpg";
    }
}
function img_click(imagen){
    imagen.src=arregloimagenes[imagen.id];
    if(arregloimagenes[imagen.id]=="imagenes/bomba.jpg"){
        alert("Perdio\n¿quiere volver a jugar?")
        bomba();
        volverajugar();
    }else{
        //nada
    }
}