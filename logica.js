const string = document.querySelector(".text-area");
let mensaje = document.querySelector(".mensaje");

 function btnEncriptar(){
    let strEncriptado = encriptador(string.value);
    mensaje.value = strEncriptado;
    mensaje.style.backgroundImage = "none"
    string.value = "";
}

function btnDesencriptar(){
    let strEncriptado = desencriptador(string.value);
    mensaje.value = strEncriptado;
    mensaje.style.backgroundImage = "none"
    string.value = "";
}





function encriptador(texto){

   const encriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
   
   texto = texto.toLowerCase()
    
    for(let i=0; i<encriptacion.length; i++){

       let letra = encriptacion[i][0];

        if(texto.includes(letra)){
            texto = texto.replaceAll(letra, encriptacion[i][1]);
        }
    }

    return texto;
}

function desencriptador(texto){
   const encriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

   for(let i=0; i<encriptacion.length; i++){

    let letra = encriptacion[i][1];

     if(texto.includes(letra)){
         texto = texto.replaceAll(letra, encriptacion[i][0]);
     }
 }

 return texto;
}


function btnCopiar(){
    let strEncriptado = mensaje.value;
    string.value = strEncriptado;
    //mensaje.style.backgroundImage = 
    mensaje.value = "";
}