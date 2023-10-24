//delaração/criando função tocaSomPom
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

//chamando/invocando a função tocaSomPom pelo clique do botão
document.querySelector('.tecla_pom').onclik = tocaSomPom;

//referência constante listaDeTeclas, buscando os botões
const listaDeTlecas = document.querySelectorAll('.tecla');

//chamando a função tocaSomPom pela item "0" da listaDeTeclas
listaDeTlecas[0].onclick = tocaSomPom;
let contador = 0;
while(contador < 9){
    listaDeTlecas[contador].onclick = tocaSomPom;
    contador = contador + 1;
    console.log(contador);
}