//delaração/criando função tocaSomPom
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//chamando/invocando a função tocaSomPom pelo clique do botão
document.querySelector('.tecla_pom').onclik = tocaSom;

//referência constante listaDeTeclas, buscando os botões
const listaDeTlecas = document.querySelectorAll('.tecla');

//chamando a função tocaSomPom pela item "0" da listaDeTeclas
listaDeTlecas[0].onclick = tocaSom;

let contador = 0;
while(contador < listaDeTlecas.length){
    const efeito = listaDeTlecas[contador].classList
    const idAudio = "#som_"+efito;
    listaDeTlecas[contador].onclick = function({
        tocaSom(Audio)
   };
    contador = contador + 1;
    console.log(contador);
}