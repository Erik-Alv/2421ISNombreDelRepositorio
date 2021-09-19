let turno = 0;
const tablero = [];
const btnpulsado = (e, posicion) =>{
    turno ++;
    const btn = e.target;
    const color =  turno % 2 ? 'black': "grey";
    btn.style.backgroundColor = color;
    tablero[posicion] = color;
    if (haganado(true))alert("HA GANADO EL COLOR " + color)
}
const haganado = () =>{
    if(tablaro[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]){
        return true; 
    }else if(tablaro[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]){
        return true;
    }else if(tablaro[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]){
        return true;
    }else if(tablaro[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]){
        return true;
    }else if(tablaro[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]){
        return true;
    }else if(tablaro[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]){
        return true;
    }else if(tablaro[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]){
        return true;
    }else if(tablaro[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2]){
        return true;
    }
    return false;
}
document.querySelectorAll("button").forEach(
    (obj, i) => obj.addEventListener("click", (e) => btnpulsado(e,i)));

   