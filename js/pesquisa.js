// const INPUT_BUSCA = document.getElementById('pesquisa');
// const TABELA_BEBIDAS = document.getElementById('conteudo');


// INPUT_BUSCA.addEventListener('keyup', () => {
//     let expressao = INPUT_BUSCA.value.toLowerCase();

//     // if (expressao.length === 1) {
//     //     return;
//     // }

//     let linhas = TABELA_BEBIDAS.getElementsByTagName('tr');

//     for (let posicao in linhas) {
//         if (true === isNaN(posicao)) {
//             continue;
//         }

//         let conteudoDaLinha = linhas[posicao].innerHTML.toLowerCase();

//         if (true === conteudoDaLinha.includes(expressao)) {
//             linhas[posicao].style.display = '';
//         } else {
//             linhas[posicao].style.display = 'none';
//         }
//     }
// });


const pesquisa = $('#pesquisa')
const conteudo = $('#conteudo')

pesquisa.bind('keyup', function() {
    let expressao = $(this).val().toLowerCase();
    
    let linhas = conteudo.find('tr');
    
    for (let posicao in linhas) {
    if (true === isNaN(posicao)) {
    continue;
    }
    
    let conteudoDaLinha = $(linhas[posicao]).html().toLowerCase();
    
    if (true === conteudoDaLinha.includes(expressao)) {
      $(linhas[posicao]).show();
    } else {
      $(linhas[posicao]).hide();
    }
    }
    });
 
