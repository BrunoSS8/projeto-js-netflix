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

//Consultando API de CEP(viacep.com.br) com Fetch API
const cep = document.querySelector("#cep")

const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}
//Propriedade (ação blur) adiciona um disparo de evento no campo cep para: sempre que tirar o mouse do input executar esse evento;
// Variavel search para procurar e retirar o "-" do cep para enviar ao site viacep para execução correta
cep.addEventListener("blur",(e)=>{

    //condição para caso o campo cep esteja vazio ele irá limpar o restante dos outros campos relacionados
    if(cep.value == "") {
        document.querySelector("#logradouro").value = ""
        document.querySelector("#bairro").value = ""
        document.querySelector("#localidade").value = ""
        document.querySelector("#uf").value = ""
    }
    let search = cep.value.replace("-","")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response =>{ response.json()
        .then( data => showData(data))
    })
    .catch(e => console.log('Deu Erro: '+ e,message))
})