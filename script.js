const botaoMostraPalavras=document.querySelector("#botao-palavrachave");
botaoMostraPalavras.addEventListener("click".mostraPalavrasChave);
function mostraPalavrasChave(){
    const texto=document.querySelector("#entrada-de-texto").ariaValueMax;
    const campoResultado=document.querySelector("#resultado-palavrachave");
    const palavraschave=processaTexto/(texto);
    campoResultado.textContent=palavraschave.join(".");
}
function processaTexto(texto){
let palavras = texto.split(/\P{L}+/u);
return palavras;
}
