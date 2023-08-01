let objPost = { nome: '', texto: '', ingredientes: '', receita: '', foto: '' };
let ingredientesPost = [];
let textoDescricao;
let textoReceita;
let tituloReceita;
let foto;
let main = document.getElementById('mainId');

function newIngrediente() {
  let clone = document.getElementById('origem').cloneNode(true);
  let destino = document.getElementById('newInputDiv');
  destino.appendChild(clone);

  let divClonada = clone.getElementsByTagName('div');
  let labelClonado = clone.getElementsByTagName('label');
  let inputClonado = clone.getElementsByTagName('input');

  for (i = 0; i < divClonada.length; i++) {
    divClonada[i].value = '';
  }

  for (i = 0; i < labelClonado.length; i++) {
    labelClonado[i].value = '';
  }

  for (i = 0; i < inputClonado.length; i++) {
    inputClonado[i].value = '';
  }
}

function addIngredientes() {
  ingredientesDoInput = document.querySelectorAll('.ingredienteInput');
  textoReceita = document.getElementById('receitaTexto').value;
  textoDescricao = document.getElementById('textoDrink').value;
  tituloReceita = document.getElementById('nomeDrink').value;
  autor = JSON.parse(localStorage.getItem('userLogado'));
  foto = document.getElementById('foto').value;
  for (i = 0; i < ingredientesDoInput.length; i++) {
    ingredientesPost.push(ingredientesDoInput[i].value);
  }
  console.log(ingredientesPost)
  objPost.nome = tituloReceita;
  objPost.texto = textoDescricao;
  objPost.ingredientes = ingredientesPost;
  objPost.receita = textoReceita;
  objPost.autor = autor.nome;
  switch (autor.nome) {
    case 'RAFAEL':
      objPost.fotoAutor = '../img/perfil/perfilrafa.jpg';
      break;
    case 'SAULO':
      objPost.fotoAutor = '../img/perfil/fotoPerfilSaulo.jpg';
      break;
    case 'RODRIGO':
      objPost.fotoAutor = '../img/perfil/rodrigo.jfif';
      break;
    default: {
      objPost.fotoAutor = '../img/perfil/user.avif';
    }
  }

  let nomeFoto = foto.split('');
  nomeFoto.splice(0, 12);
  nomeFoto = nomeFoto.toString().replaceAll(',', '');
  console.log(nomeFoto, 'nomeFoto');
  objPost.foto = `../img/posts/${nomeFoto}`;
  console.log(objPost.foto);

  let vetorPost = JSON.parse(localStorage.getItem('post'));
  console.log(vetorPost)
  vetorPost.unshift(objPost);
  console.log(vetorPost)
  let postTotal = JSON.stringify(vetorPost);
  console.log(postTotal)
  localStorage.setItem('post', postTotal);

  window.location.href = './perfil.html';
}
