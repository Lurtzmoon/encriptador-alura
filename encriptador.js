function encriptar() {
    textoIngresado = document.getElementById('textoUsuario').value;
    esconderElementos();
    if (textoIngresado.match(/[á,é,í,ó,ú]/)) {
        alert('Solo letras minúsculas y sin acentos');
        return;
    } else {
        textoEncriptado = textoIngresado.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        agregarTextoElemento("textorespuesta", `${textoEncriptado}`);
        return;
    }
}
function desencriptar() {
    textoIngresado = document.getElementById('textoUsuario').value;
    esconderElementos()
    if (textoIngresado.match(/[á,é,í,ó,ú]/)) {
        alert('Solo letras minúsculas y sin acentos');
        return;
    } else {
        
        textoEncriptado = textoIngresado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        agregarTextoElemento("textorespuesta", `${textoEncriptado}`);
        return; 
    }
}

function esconderElementos(){
    boton = document.getElementById("texto3");
    boton.removeAttribute("hidden");
    document.getElementById("imagen1").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").style.display = "none";
    return;
}
function agregarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
}

function copiar() {
    textoCopiado = document.getElementById("textorespuesta");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textoCopiado.value);
    alert('Texto copiado exitosamente')
    return;
}