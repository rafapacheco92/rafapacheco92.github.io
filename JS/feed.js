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

populaAside();

function populaAside() {
  let userLogged = JSON.parse(localStorage.getItem('userLogado'));
  let nome;
  let texto;
  let foto;
  for (i = 0; i < usersPadrao.length; i++) {
    if (userLogged === usersPadrao[i].email) {
      nome = usersPadrao[i].nome;
      texto = usersPadrao[i].descricao;
      foto = usersPadrao[i].foto;
    }
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
