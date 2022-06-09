var atividade = document.getElementById('atividade');//input
var dtAtv = document.querySelector('#dataAtv')//data
var btnCadstrar = document.querySelector('input[type=submit]') //button
var indice = 0;

btnCadastrar.addEventListener('click',(e) => {
    e.preventDefault();//evita os envios de dados

    let lista = document.getElementById('lista');

    let linha = document.createElement('tr');

    let celId = document.createElement('th');
    celId.innerText = indice++;//indice 0 soma 1 sempre que roda

    let celAtv = document.createElement('td');
    celAtv.innerText = atividade.value;//pega o resultado do input

    let celData = document.createElement('td');
    let dataFormatada = new Date(dtAtv.value).toLocaleDateString('pt-br',{timeZone:'utc'});//instanciando a data e colocando pt-br
    celData.innerText = dataFormatada;//chamando a variavel da dataFormatada
    

    let celAcao = document.createElement('td');
    let concluir = document.createElement('input');//cria o input dentro do td
    concluir.type = 'checkbox';//coloca que input é checkbox
    concluir.id = 'atv' + indice;// quando cria o input coloca atv + numero do indice como id
    celAcao.appendChild(concluir);//chama no celAcao o concluir que é o input criado

    linha.appendChild(celId);
    linha.appendChild(celAtv);
    linha.appendChild(celData);
    linha.appendChild(celAcao);

    lista.appendChild(linha);//tbody pro tr

    // concluir.addEventListener('change',() =>{//uma forma de fazer
    //     linha.remove();//
    // });
    

    // concluir.addEventListener('change',() =>{
    //     let resposta = confirm('Deseja mesmo?');
    //     if(resposta){
    //         linha.remove()
    //     }
    // });

    concluir.addEventListener('change',() =>{
        let resposta = confirm('Deseja mesmo?');//caixa de dialogo ok, cancelar
        if(resposta){
            linha.style.backgroundColor = 'red';//colocando cor verde no fundo
            linha.style.textDecoration = 'line-through';//faz um risco nos que eu marcar
            linha.style.transition = '1s';//efeito de transicao

            setTimeout(() =>{
                linha.remove();
            }, 500);//3 segundos e executa
        }
    });


    //set timeout executa dps de uns segundos e acaba
    //set interval marca um intervalo de segundos e faz de novo a funcao, continuo
})