function toggleVideo(){
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    trailer.classList.toggle('active')
    video.currentTime = 0;
    video.pause();
}

function multiplicacao() {

    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.querySelector('#txtn2')
    // Utilizei o nextElementSibling no tn2 para o backgroundColor do proximo elemento irmão se tornar vermelho.
    tn2.nextElementSibling.style.backgroundColor = '#de0611'; 
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 * n2 
    res.innerHTML = `O total de episódios da série é igual a ${s}`
    }