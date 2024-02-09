//diccionario
const dictionary = {
  "e": "enter",
  "i": "imes",
  "a": "ai",
  "o": "ober",
  "u": "ufat"
};




function contieneCaracteresInvalidos(texto) {
// Expresión regular para verificar mayúsculas, caracteres especiales o acentos
const regex = /[^a-z\s]/g;

return regex.test(texto);
}


//Funcion para encripatr
function Encriptar() {
TextoSinEncriptar = document.getElementById("textarea").value
if ( TextoSinEncriptar == ""){
  alert("No hay ningun texto a encriptar");
}else if (contieneCaracteresInvalidos(TextoSinEncriptar)){
  alert("No se pueden utilizar mayúsculas, caracteres especiales ni acentos");
}else{
  desarrollo_encriptar();
} 

}


//logica de encrpitar y mostrar en el panel
function desarrollo_encriptar() {
let textoSinEncriptar = TextoSinEncriptar.toLowerCase();
let characters = textoSinEncriptar.split("");
let encriptarTexto = characters.map(function (letter) {
  return dictionary[letter] || letter;
});

encriptarTexto = encriptarTexto.join("");
document.getElementById("texto-encriptado-p2").innerText = encriptarTexto;
document.querySelector(".sin-texto").style.display = "none";
document.querySelector(".texto-encriptado").style.display = "block";

return encriptarTexto;
}



//funcion desencriptar
function desencriptar() {
let TextoEncriptado = document.getElementById("textarea").value;

if (TextoEncriptado === "") {
  alert("No hay texto encriptado para desencriptar");
} else {
  Desarrollo_desencriptar(TextoEncriptado);
}
}


//logica de desencriptar y mostrar en el panel
function Desarrollo_desencriptar(TextoEncriptado) {
TextoEncriptado = TextoEncriptado.toLowerCase();
TextoEncriptado = TextoEncriptado.replace(/ufat/g, "u");
TextoEncriptado = TextoEncriptado.replace(/ober/g, "o");
TextoEncriptado = TextoEncriptado.replace(/ai/g, "a");
TextoEncriptado = TextoEncriptado.replace(/imes/g, "i");
TextoEncriptado = TextoEncriptado.replace(/enter/g, "e");

document.getElementById("texto-encriptado-p2").innerText = TextoEncriptado;
document.querySelector(".sin-texto").style.display = "none";
document.querySelector(".texto-encriptado").style.display = "block";

return TextoEncriptado;
}


//boton para eliminar todo
function limpiarTexto() {
document.getElementById("textarea").value = "";
document.querySelector(".sin-texto").style.display = "block";
document.querySelector(".texto-encriptado").style.display = "none";
}


//boton copiar
function copiarAlPortapapeles() {
var outputElement = document.getElementById("texto-encriptado-p2");
var range = document.createRange();
range.selectNode(outputElement);
window.getSelection().removeAllRanges();
window.getSelection().addRange(range);
document.execCommand("copy");
window.getSelection().removeAllRanges();
}
