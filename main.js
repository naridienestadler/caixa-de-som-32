//delaração/criando função tocaSomPom
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//chamando/invocando a função tocaSomPom pelo clique do botão
document.querySelector('.tecla_pom').onclik = tocaSom;

//referência constante listaDeTeclas, buscando os botões
const listaDeTelecas = document.querySelectorAll('.tecla');

//chamando a função tocaSomPom pela item "0" da listaDeTeclas
listaDeTeclas[0].onclick = tocaSom;

for(let contador = 0;contador<listaDeTeclas.length;contador++){
    const tecla = listaDeTeclas [contaor];
    const efeito = tecla.classList[1];
    const idAudio = `#som_${efeito}`;
    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    tecla.onkeydown = function
        tecla.classList.add('ativa');
    
}