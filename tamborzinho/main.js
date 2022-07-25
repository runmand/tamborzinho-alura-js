function playsound (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const ListaTeclas = document.querySelectorAll('.tecla');



for (let cont =0; cont < ListaTeclas.length; cont++) {
    const teclas = ListaTeclas[cont];
    const instrumento =  teclas.classList[1];
    const idAudio = `#som_${instrumento}`;


   teclas.onclick = function (){
    playsound(idAudio);

}
teclas.onkeydown = function (evento) {
    if (evento.code === 'Space' || evento.code === 'Enter') {
teclas.classList.add('ativa');
    }
}

teclas.onkeyup = function ( ){
    teclas.classList.remove('ativa');

}

} 






