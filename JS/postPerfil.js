let bancoDados = JSON.parse(localStorage.getItem('usersDb'))
let asideLocalStorage = JSON.parse(localStorage.getItem('usersAside'))

let asidesS = ['Me chamo Rafael, nascido e criado em Floripa, me diverto com os drinks', 'Da trilha ao balcão, uma vida movida pela aventura e pelos sabores únicos.', 'Sommelier de Cervejas, cervejeiro caseiro e aventureiro no mundo dos drinks.']

let usersPadrao = [
  {
    nome: bancoDados[0].nome,
    descricao:
      asideLocalStorage[0],
    foto: '../img/perfil/perfilrafa.jpg',
    email: 'rafael@gmail.com',
  },
  {
    nome: bancoDados[1].nome,
    descricao:
      asideLocalStorage[1],
    foto: '../img/perfil/rodrigo.jfif',
    email: 'rodrigo@gmail.com',
  },
  {
    nome: bancoDados[2].nome,
    descricao:
      asideLocalStorage[2],
    foto: '../img/perfil/fotoPerfilSaulo.jpg',
    email: 'saulo@gmail.com',
  },
];

asideLocal()

function asideLocal(){

  let asidesSJ = JSON.stringify(asidesS)
localStorage.setItem('usersAside', asidesSJ)

}

let posts = [
  {
    nome: 'SUPERB COQUETEL: Um enganoso drink de cerveja amanteigada.',
    foto: '../img/posts/superb.jpg',
    fotoAutor: '../img/perfil/perfilrafa.jpg',
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
    autor: bancoDados[0].nome,
  },

  {
    nome: 'COQUETEL ACHOCOLATADO COM AMENDOAS',
    foto: '../img/posts/chocolate.jpg',
    fotoAutor: '../img/perfil/rodrigo.jfif',
    ingredientes: [
      '60 ml de bourbon infusionado com pecan',
      '10 ml de xarope de maple',
      '22 ml de crème de cacao amargo',
      'Bitters de chocolate',
    ],
    texto:
      'Curiosidade sobre mim, eu amo chocolate. Eu adoro em todas as formas. Quando posso tê-lo em forma de coquetel, fico muito feliz. Há até um boato (ou lenda) de que toda vez que vou à Vegas (algo que tento fazer pelo menos uma vez por ano), gosto de começar todos os dias com um Chocolate Martini. E o que dizer do fim da noite? E quando é hora de  com algo da família do bourbon? Temos o Coquetel de Chocolate, Xarope de Ácer e amendoas para isso!',
    receita:
      'Faça seu bourbon infusionado com pecan. Adicione o bourbon, o xarope, o crème de cacao amargo e os bitters em um shaker com gelo. Agite. Despeje o conteúdo do shaker em um  old fashioned com um grande pedaço de gelo. Decore com uma fatia de pecan. Despeje uma parte da stout suavemente por cima.',
    autor: bancoDados[1].nome,
  },

  {
    nome: 'LUCID FLY: Um enganoso drink de cerveja amanteigada.',
    foto: '../img/posts/lucidFly.jpg',
    fotoAutor: '../img/perfil/fotoPerfilSaulo.jpg',
    ingredientes: [
      '30 ml de bourbon',
      '30 ml de Cherry Herring',
      '60 ml de Tang',
      '1/4 colher de chá de absinto',
      'Uma pitada de Cherry Bitters',
      'Rodelas de laranja',
    ],
    texto:
      'Uma antiga amiga minha, me disse que ela e um amigo tinham uma banda e que eles eram bons, eu sabia que eles seriam bons. Essa foi minha introdução ao Lucid Fly e (tambores) eles finalmente estão lançando seu primeiro álbum de estúdio! Doug pediu se poderíamos criar um coquetel para o álbum deles, e quem sou eu para dizer não? Apresentando o coquetel Lucid Fly!',
    receita:
      'Coloque todos os ingredientes no copo Old Fashioned. Adicione cubos de gelo e mexa bem. Decore com rodelas de laranja e sirva.',
    autor: bancoDados[2].nome,
  },

  {
    nome: 'VALENTINE AMARGO: Para um dia dos namorados amargo.',
    foto: '../img/posts/valentine.jpg',
    fotoAutor: '../img/perfil/perfilrafa.jpg',
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
    autor: bancoDados[0].nome,
  },

  {
    nome: 'HORCHATA',
    foto: '../img/posts/horchata.jpg',
    fotoAutor: '../img/perfil/rodrigo.jfif',
    ingredientes: [
      '120 ml de leite de amêndoas',
      '15 ml de licor de amêndoas',
      '15 ml de xarope simples de canela',
      '60 ml de tequila añejo',
    ],
    texto:
      'Se você não conhece horchata, é um elixir mágico de sabor - pense nela como um pudim de arroz, mas em forma de bebida e mais leve. É refrescante. Sabendo disso, era apenas  questão de tempo para eu enfrentar essa bebida mais incrível em forma de álcool, vamos começar com o Horchata!',
    receita:
      'Adicione todos os ingredientes em um shaker com gelo. Adivinha? Agite. Encha o copo com gelo. Coe sua horchata azedada no copo. Decore com um pouco de canela.',
    autor: bancoDados[1].nome,
  },

  {
    nome: 'BLACK VELVET',
    foto: '../img/posts/blackVelvet.jpg',
    fotoAutor: '../img/perfil/fotoPerfilSaulo.jpg',
    ingredientes: [
      '1 parte de stout (realmente, Guinness)',
      '1 parte de cidra (seca)',
    ],
    texto:
      'Ah, St. Patrick day - sempre fui fã. Desde a comida até a música e a desculpa para usar verde, tudo é mágico. Caramba, isso foi antes mesmo de eu perceber que era um ótimo dia para tomar uma caneca (ou três) de cerveja. No entanto, às vezes você quer mais do que apenas uma caneca solitária, talvez até algo que não seja verde. Para esses momentos, aproveite um Black Velvet!',
    receita:
      'Abra sua cidra. Abra sua stout. Despeje uma parte da cidra em seu copo pilsner. Pegue uma colher e coloque-a logo acima da cidra. Despeje uma parte da stout suavemente por cima.',
    autor: bancoDados[2].nome,
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
  let asideContent = JSON.parse(localStorage.getItem('usersAside'))
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

function exit(){
  userLogout = JSON.stringify(localStorage.getItem('userLogado'));
  userLogout = ''
  localStorage.setItem('userLogado', userLogout);
  alert('Até breve!')
  window.location.href = '../index.html';
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

    let fotoAutor = document.createElement('img');
    fotoAutor.setAttribute('src', newPosts[i].fotoAutor);
    fotoAutor.setAttribute('class', 'ftperfilPost');
    infoPerfil.appendChild(fotoAutor);

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

    let userLogged = JSON.parse(localStorage.getItem('userLogado'));
    if (userLogged.nome === newPosts[i].autor) {
      let btnNewPost = document.createElement('a');
      btnNewPost.setAttribute('class', 'botao');
      btnNewPost.setAttribute('onClick', `edit(${i})`);
      let textoBtn = document.createElement('p');
      let conteudoTextoBtn = document.createTextNode('Editar');
      textoBtn.appendChild(conteudoTextoBtn);
      btnNewPost.appendChild(textoBtn);
      divNewPost.appendChild(btnNewPost);
    }

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
