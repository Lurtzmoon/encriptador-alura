
function ComprobarAcentos(texto) {
    if (texto.value.match('[á,é,í,ó,ú]|[Á,É,Í,Ó,Ú]')) {
        alert('No se permiten acentos en la casilla')
        return;
    }
}
function encriptar() {
    textoIngresado = document.getElementById('textoUsuario').value;
    if (textoIngresado.match(/[á,é,í,ó,ú]/)) {
        alert('Solo letras minúsculas y sin acentos');
        return;
    } else {
        textoEncriptado = textoIngresado.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        agregarTextoElemento("texto1", `${textoEncriptado}`);
        return;
    }
}
function desencriptar() {
    textoIngresado = document.getElementById('textoUsuario').value;
    if (textoIngresado.match(/[á,é,í,ó,ú]/)) {
        alert('Solo letras minúsculas y sin acentos');
        return;
    } else {
        
        textoEncriptado = textoIngresado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        agregarTextoElemento("texto1", `${textoEncriptado}`);
        return; 
    }
}

function agregarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
}
