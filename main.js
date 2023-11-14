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

for(let contador = 0;contador<listaDeTlecas.length;contador++){
    const tecla = listaDeTeclas [contaor];
    const efeito = tecla.classList[1];
    const idAudio = `#som_${efeito}`;
    tecla.onclick = function(){
        tocaSom(idAudio);
    }
}