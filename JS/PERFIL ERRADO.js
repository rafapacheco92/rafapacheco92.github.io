let usersPadrao = [
  {
    nome: 'Rafael Pacheco',
    descricao:
      'Me chamo Rafael, sou de Floripa, e me divirto fazendo uns drinks.',
    foto: '../img/perfil/perfilrafa.jpg',
    email: 'rafael@gmail.com',
  },
  {
    nome: 'Rodrigo Ramos',
    descricao:
      'Da trilha ao balcão, uma vida movida pela aventura e pelos sabores únicos.',
    foto: '../img/perfil/rodrigo.jfif',
    email: 'rodrigo@gmail.com',
  },
  {
    nome: 'Saulo Tavares',
    descricao:
      'Sommelier de Cervejas. Cervejeiro caseiro e aventureiro no mundo dos drinks.',
    foto: '../img/perfil/fotoPerfilSaulo.jpg',
    email: 'saulo@gmail.com',
  },
];

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
    receita:
      'Adicione todas as bebidas alcoólicas em seu copo de coquetel com gelo. Agite. Coloque um magnífico pedaço de gelo em seu copo. Despeje seu coquetel sobre ele. Decore com suas cerejas ao marasquino.',
    autor: 'RAFAEL',
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
      'Dia dos Namorados, ah, que época mágica do ano. Tudo é cor-de-rosa, fofo e cheio de sentimentos melosos e "bleh". Claro, vou comemorar, mas é mais um momento para ficar em casa. Não precisa sair, fazer um grande alarde ou mostrar pra todo mundo.',
    receita:
      'Coloque todas as bebidas alcoólicas e o suco de limão em uma coqueteleira. Adicione gelo. Agite. Despeje e coe em seu copo. Adicione uma etapa de coagem para evitar pedaços de gelo. A menos que você prefira, nesse caso, não coe. Decore com um morango. Agora, fique amargo. Ou seja feliz. De qualquer maneira, é um coquetel excelente.',
    autor: 'RAFAEL',
  },
];

let postEdit = {
  nome: '',
  foto: '',
  ingredientes: '',
  texto: '',
  receita: '',
};

populaAside();
populaPostsLocalStorage();

function populaAside() {
  let userLogged = JSON.parse(localStorage.getItem('userLogado'));
  let nome;
  let texto;
  let foto;
  let userExists = false;
  for (i = 0; i < usersPadrao.length; i++) {
    if (userLogged.email === usersPadrao[i].email) {
      nome = usersPadrao[i].nome;
      texto = usersPadrao[i].descricao;
      foto = usersPadrao[i].foto;
      userExists = true;
    }
  }

  if (!userExists) {
    nome = userLogged.nome;
    texto = '';
    foto = '../img/perfil/user.avif';
  }

  divFoto = document.getElementById('linkPerfil');
  divTextos = document.getElementById('divText');
  let fotoPerfil = document.createElement('img');
  fotoPerfil.setAttribute('src', foto);
  fotoPerfil.setAttribute('class', 'ftperfil');
  fotoPerfil.setAttribute('alt', 'FotoPerfil');
  divFoto.appendChild(fotoPerfil);

  let h2Aside = document.createElement('h2');
  let textoH2 = document.createTextNode(nome);
  h2Aside.appendChild(textoH2);
  let pAside = document.createElement('p');
  let textoPAside = document.createTextNode(texto);

  pAside.appendChild(textoPAside);
  divTextos.appendChild(h2Aside);
  divTextos.appendChild(pAside);
}

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

    let infoPerfil = document.createElement('div');
    infoPerfil.setAttribute('class', 'perfilInPost');
    divNewPost.appendChild(infoPerfil);

    let autor = document.createElement('p');
    let textoAutor = document.createTextNode(newPosts[i].autor);
    autor.appendChild(textoAutor);
    infoPerfil.appendChild(autor);
    debugger;

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

    let tituloIngredientes = document.createElement('h2');
    tituloIngredientes.setAttribute('id', 'label-introducao');
    let textoTituloIngredientes = document.createTextNode('Ingredientes');
    tituloIngredientes.appendChild(textoTituloIngredientes);
    divNewPost.appendChild(tituloIngredientes);

    let listaIngredientesPost = document.createElement('ul');

    for (j = 0; j < newPosts[i].ingredientes.length; j++) {
      let item = document.createElement('li');
      let textoIngredientes = document.createTextNode(
        newPosts[i].ingredientes[j],
      );
      item.appendChild(textoIngredientes);
      listaIngredientesPost.appendChild(item);
    }
    divNewPost.appendChild(listaIngredientesPost);

    let receita = document.createElement('p');
    receita.setAttribute('id', 'texto-conteudo');
    receita.setAttribute('class', 'textoConteudo');
    let textoReceitaDrink = document.createTextNode(newPosts[i].receita);
    receita.appendChild(textoReceitaDrink);
    divNewPost.appendChild(receita);

    let btnNewPost = document.createElement('a');
    btnNewPost.setAttribute('class', 'botao');
    btnNewPost.setAttribute('onClick', `edit(${i})`);
    let textoBtn = document.createElement('p');
    let conteudoTextoBtn = document.createTextNode('Editar');
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

function edit(item) {
  let newPosts = JSON.parse(localStorage.getItem('post'));
  postEdit = newPosts[item];
  postEdit.id = item;
  let postEditJ = JSON.stringify(postEdit);
  localStorage.setItem('postEdit', postEditJ);
  window.location.href = './editPost.html';
}

// =========================== Open/Close Modais

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
