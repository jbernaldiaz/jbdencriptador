let str = document.querySelector(".text-area");
let mensaje = document.querySelector(".mensaje");

 function btnClick(){
    let strEncriptado = encriptador(str.value);
    mensaje.value = strEncriptado;
    mensaje.style.backgroundImage = "none"
    textArea.value = "";
}

function encriptador(texto){

   const encriptacion = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]]; 
    
    for(let i=0;i<encriptacion.length;i++){

       

        if(text.includes(encriptacion[i][0])){
            texto = texto.replaceAll(letra, encriptacion[i][1]);
        }
    }

    return texto;
}


