let posts = [
  {
    nome: 'SUPERB COQUETEL: Um enganoso drink de cerveja amanteigada.',
    foto: '../img/posts/superb.jpg',
    ingredientes: [
      '1 colher de sopa de geleia de goiaba',
      '1 colher de sopa de açúcar',
      '60 ml de água',
      '60 ml de conhaque',
      '30 ml de rum',
      '½ limão',
      '2 fatias de laranja',
    ],
    texto:
      'Aqui em casa a gente tem a tradição de celebramos tudo o que é ótimo sobre o exagero brasileiro em um único dia, geralmente assistindo um Masterchef. principalmente na final. A comida é boa. Este ano, decidi que precisávamos de um coquetel edição especial para acompanhar, apresentando o Superb!',
  },

  {
    nome: 'VALENTINE AMARGO: Para um dia dos namorados amargo.',
    foto: '../img/posts/valentine.jpg',
    ingredientes: [
      '45 ml de vodka',
      '90 ml de suco de tomate',
      '15 ml de suco de limão fresco',
      '2-3 dashes de molho inglês (Worcestershire sauce)',
      '2-3 dashes de molho de pimenta Tabasco (ou a gosto)',
      'Sal e pimenta a gosto',
      'Gelo',
      'Fatia de limão para decorar',
      'Talo de aipo para decorar (opcional)',
    ],
    texto:
      'Dia dos Namorados, ah, que época mágica do ano. Tudo é cor-de-rosa, fofo e cheio de sentimentos melosos e "bleh". Não é realmente a minha praia. Claro, vou comemorar, mas é mais um momento para ficar em casa, preparar uma boa refeição. Não precisa sair, fazer um grande alarde ou mostrar pra todo mundo. Não há necessidade de ganhar pontos na internet sendo extremamente extravagante em gestos grandiosos (ainda mais se isso acontece uma vez no ano). E se você não tem ninguém para passar essa data, aí então esse drink é pra você.',
  },
];

populaPostsLocalStorage();

function populaPostsLocalStorage() {
  vetorPosts = JSON.stringify(localStorage.getItem('post'));

  if (vetorPosts === 'null') {
    
    let firstPosts = JSON.stringify(posts);
    localStorage.setItem('post', firstPosts);
  }
}

let newPosts = JSON.parse(localStorage.getItem('post'));

criaPost(newPosts);

function criaPost(newPosts) {
  

  for (i = 0; i < newPosts.length; i++) {
    

    let main = document.getElementById('mainId');
    let sectionPosts = document.getElementById('posts');
    let articleNewPost = document.createElement('article');
    articleNewPost.setAttribute('class', 'conteudo');
    articleNewPost.setAttribute('aria-labelledby', 'label-introducao');

    let divNewPost = document.createElement('div');
    divNewPost.setAttribute('class', 'introducao');
    divNewPost.setAttribute('id', 'introducao');
    articleNewPost.appendChild(divNewPost);

    let tituloPost = document.createElement('h2');
    tituloPost.setAttribute('id', 'label-introducao');
    let textoTituloPost = document.createTextNode(newPosts[i].nome);
    tituloPost.appendChild(textoTituloPost);
    divNewPost.appendChild(tituloPost);

    let descricao = document.createElement('p');
    descricao.setAttribute('id', 'texto-conteudo');
    descricao.setAttribute('class', 'textoConteudo');
    let textoDescricaoDrink = document.createTextNode(newPosts[i].texto);
    descricao.appendChild(textoDescricaoDrink);
    divNewPost.appendChild(descricao);

    // let listaIngredientesPost = document.createElement('ul');

    // for (i = 0; i < r.ingredientes.length; i++) {
    //   let item = document.createElement('li');
    //   let textoIngredientes = document.createTextNode(r.ingredientes[i]);
    //   item.appendChild(textoIngredientes);
    //   listaIngredientesPost.appendChild(item);
    // }
    // divNewPost.appendChild(listaIngredientesPost);
    
    

    let btnNewPost = document.createElement('a');
    btnNewPost.setAttribute('class', 'botao');
    let textoBtn = document.createElement('p');
    let conteudoTextoBtn = document.createTextNode('RECEITA');
    textoBtn.appendChild(conteudoTextoBtn);
    btnNewPost.appendChild(textoBtn);
    divNewPost.appendChild(btnNewPost);

    let divNewPic = document.createElement('div');
    divNewPic.setAttribute('class', 'imagemIntro');

    let newPic = document.createElement('img');
    newPic.setAttribute('src', newPosts[i].foto);
    divNewPic.appendChild(newPic);

    articleNewPost.appendChild(divNewPost);
    articleNewPost.appendChild(divNewPic);
    sectionPosts.appendChild(articleNewPost);
    main.appendChild(sectionPosts);
    
  }
}

let btModalConexoes = document.querySelector('.botaoConexoes');
let modalConexoes = document.querySelector('.conexoesPop');
let btCloseModalConexoes = document.querySelector('.conexoesPop button');

let btModalNot = document.querySelector('.botaoNot');
let modalNot = document.querySelector('.notPop');
let btCloseModalNot = document.querySelector('.notPop button');

btModalConexoes.onclick = function () {
  modalConexoes.showModal();
};

btCloseModalConexoes.onclick = function () {
  modalConexoes.close();
};

btModalNot.onclick = function () {
  modalNot.showModal();
};

btCloseModalNot.onclick = function () {
  modalNot.close();
};

// ============================= Variáveis botão de deletar notificações

let div00 = document.getElementById('divNotificacao00');
let div01 = document.getElementById('divNotificacao01');
let div02 = document.getElementById('divNotificacao02');
let div03 = document.getElementById('divNotificacao03');
let div04 = document.getElementById('divNotificacao04');
let div05 = document.getElementById('divNotificacao05');

function Apaga(n) {
  switch (n) {
    case 0:
      div00.style.display = 'none';
      break;
    case 1:
      div01.style.display = 'none';
      break;

    case 2:
      div02.style.display = 'none';
      break;

    case 3:
      div03.style.display = 'none';
      break;

    case 4:
      div04.style.display = 'none';
      break;

    case 5:
      div05.style.display = 'none';
      break;
  }
}