function excluirTarefa(classe) {
    console.log(`Teste: ${classe}`);
    document.querySelector('li.' + classe).remove();

    // 
    if (!document.querySelector('#state li')) {
        document.getElementById('state').remove();
    }
    
    // Seta foco no campo de TAREFA
    setFocus();
}

function alteraEstado() {
    let estado      = document.querySelector('#estado').value;
    if (estado != 0) {
        let state = document.querySelector('div.container #divExterna #state');
        let textNode    = document.createTextNode(estado);
        let qtdLi = 1;

        if (!state) {
            // Cria o elemento da lista
            state = document.createElement('div');
            state.setAttribute('id', 'imagem');
            state.setAttribute('class', 'col-md-12');
            document.querySelector('div.container #divExterna').appendChild(state);
            let img = document.createElement('img');
            img.setAttribute('class', 'img-responsive');
            
            switch (estado) {
                case 'SC':
                    img.srcset = 'skins/images/Bandeira_de_Santa_Catarina.svg';
                    img.alt = 'Santa Catarina';
                    break;

                case 'PR':
                    img.srcset = 'skins/images/Bandeira_do_Parana.jpg';
                    img.alt = 'Paraná';
                    break;

                case 'RS':
                    img.srcset = 'skins/images/Bandeira_do_Rio_Grande_do_Sul.png';
                    img.alt = 'Rio Grande do Sul';
                    break;

                default:
                    break;
            }

            img.appendChild(textNode);
            state.appendChild(img);
        } else {
            // Quantidade de "li" que a lista possui
            qtdLi = lastListElement();

            // Continua add elementos na lista
            let li = document.createElement('li');
            li.setAttribute('class', 'item-' + (qtdLi + 1));
            li.appendChild(textNode);
            li.innerHTML += '<button onclick="excluirTarefa(\'' + li.className + '\')" class="' + li.className + ' icon-cross" id="btn_items" title="Excluir Tarefa"></button>';
            state.appendChild(li);
        }
    }

    // Limpa campo de TAREFA
    document.querySelector('#estado').value = 0;

    // Seta foco no campo de TAREFA
    setFocus();
}

function lastListElement() {
    let list = document.querySelectorAll('#state li');
    // -1 para pegar o último elemento e ver qual o último item da Lista
    let qtdLi = list.length - 1;
    let vQtd = list[qtdLi].className.split('-');
    return parseInt(vQtd[1]);
}

function setFocus() {
    document.getElementById('estado').focus();
}