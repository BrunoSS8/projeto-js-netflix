function toggleVideo(){
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    trailer.classList.toggle('active')
    video.currentTime = 0;
    video.pause();
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

//mylist

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

function imageRow1() {

    const listItem = document.querySelector('.mylist-div')
    
    let table = document.getElementById("listaFav");
    
    let tableSize = table.rows.length;
    let row = table.insertRow(tableSize); //Inserindo uma linha abaixo da Tabela
    let cell1 = row.insertCell(0); //Inserindo as celulas da linha
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    
    row.id = tableSize;
    let btnCode = "<p class='mylist-third' onclick='removeToTable(this)'>X</p>";
    
    cell2.innerHTML = listItem.lastElementChild.textContent;
    cell3.innerHTML = btnCode;
    
    return false;
}

function imageRow2() {
    
    const listItem = document.querySelector('#mylist-div2')
        
    let table = document.getElementById("listaFav");
        
    let tableSize = table.rows.length;
    let row = table.insertRow(tableSize); //Inserindo uma linha abaixo da Tabela
    let cell1 = row.insertCell(0); //Inserindo as celulas da linha
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
        
    row.id = tableSize;
    let btnCode = "<p class='mylist-third' onclick='removeToTable(this)'>X</p>";
        
    cell2.innerHTML = listItem.lastElementChild.textContent;
    cell3.innerHTML = btnCode;
        
    return false;
}

function imageRow3() {
    
    const listItem = document.querySelector('#mylist-div3')
    
    let table = document.getElementById("listaFav");
    
    let tableSize = table.rows.length;
    let row = table.insertRow(tableSize); //Inserindo uma linha abaixo da Tabela
    let cell1 = row.insertCell(0); //Inserindo as celulas da linha
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    
    row.id = tableSize;
    let btnCode = "<p class='mylist-third' onclick='removeToTable(this)'>X</p>";
    
    cell2.innerHTML = listItem.lastElementChild.textContent;
    cell3.innerHTML = btnCode;
    
    return false;
}
    
function imageRow4() {
    
    const listItem = document.querySelector('#mylist-div4')
        
    let table = document.getElementById("listaFav");
        
    let tableSize = table.rows.length;
    let row = table.insertRow(tableSize); //Inserindo uma linha abaixo da Tabela
    let cell1 = row.insertCell(0); //Inserindo as celulas da linha
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
        
    row.id = tableSize;
    let btnCode = "<p class='mylist-third' onclick='removeToTable(this)'>X</p>";
        
    cell2.innerHTML = listItem.lastElementChild.textContent;
    cell3.innerHTML = btnCode;
        
    return false;
}
    
function imageRow5() {
    
    const listItem = document.querySelector('#mylist-div5')
            
    let table = document.getElementById("listaFav");
            
    let tableSize = table.rows.length;
    let row = table.insertRow(tableSize); //Inserindo uma linha abaixo da Tabela
    let cell1 = row.insertCell(0); //Inserindo as celulas da linha
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
            
    row.id = tableSize;
    let btnCode = "<p class='mylist-third' onclick='removeToTable(this)'>X</p>";
            
    cell2.innerHTML = listItem.lastElementChild.textContent;
    cell3.innerHTML = btnCode;
            
    return false;
}
    
function adicionarRow() {
    
    //Definindo as variaveis e recebendo os dados
    let name =`<td class='mylist-second'>${document.getElementById('name').value}</td>`;
    let table = document.getElementById("listaFav");
        
    let tableSize = table.rows.length //Calculando o tamanho da Tabela
    let row = table.insertRow(tableSize); //Inserindo uma linha abaixo da Tabela
    let cell1 = row.insertCell(0); //Inserindo as celulas da linha
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    
    row.id = tableSize; //Adicionando o id no elemento a ser criado
    
    //Criando o codigo do botão para remover a linha
    let btnCode = "<p class='mylist-third' onclick='removeToTable(this)'>X</p>";
    
    //Preenchendo as celulas da linha  
    cell2.innerHTML = name;
    cell3.innerHTML = btnCode;
    
    //Limpando os campos de inserção de dados
    document.getElementById('name').value = "";
    
    //Retornando 'false' para impedir o reload da pagina
    return false;
}
    
function removeToTable(id){
    
    let row = id.parentNode.parentNode.id; //Pegando o id do avô do botão
    row = document.getElementById(row); //Recebendo o elemento da linha pelo ID
    row.parentNode.removeChild(row); //Removendo a linha
    
    return false;
}