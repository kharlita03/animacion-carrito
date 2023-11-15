var fondo = document.querySelector('.fondo');
var rueda1 = document.querySelector('.rueda_1');
var rueda2 = document.querySelector('.rueda_2');
var luz = document.querySelector('.luz');
var luz1 = document.querySelector('.luz1');


fondo.addEventListener('click' , movimiento)

function movimiento(){
    fondo.classList.add('fondo_mover')
    rueda1.classList.add('rueda_mover')
    rueda2.classList.add('rueda_mover')
    luz.classList.remove('oculto')
    luz1.classList.remove('oculto')
}