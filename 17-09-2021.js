
function calcular(){
    let num1 = parseInt(document.getElementById("num-1").value);
    let num2 = parseInt(document.getElementById("num-2").value);
    var opera = document.getElementById("operacion").value;

    if(opera == 1){
        var resultadofinal = document.getElementById("resultado").value = num1 + num2;
        
        switch(resultadofinal)
        {
            case("bebe"):
            resultadofinal = 3;
            alert("Usted tiene "+ resultadofinal + " años y es un Bebe");
            break;


            case(resultadofinal == 6):
            alert("Usted tiene "+ resultadofinal + " años y es un niño");
            brack;
        
            case(resultadofinal = 11,12,13,14,15,16):
            alert("Usted tiene "+ resultadofinal + " años y es un pre-adolecente");
            brack;

            case(resultadofinal = 17,18,19,20,21,22):
            alert("Usted tiene "+ resultadofinal + " años y es un adolecente");
            brack;

            case(resultadofinal = 23,24,25):
            alert("Usted tiene "+ resultadofinal + " años y es un pre-adulto");
            brack;
            case(resultadofinal > 25):
            alert("Usted tiene "+ resultadofinal + " años y es un adulto");
            brack;
            
            default:
                alert("Error");
                break;
        }
        
    }
    else
    {
        document.getElementById("resultado").value = num1 - num2;
    }
    
}
