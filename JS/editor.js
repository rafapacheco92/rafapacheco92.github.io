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
  foto = document.getElementById('foto').value;
  for (i = 0; i < ingredientesDoInput.length; i++) {
    ingredientesPost.push(ingredientesDoInput[i].value);
  }
  objPost.nome = tituloReceita;
  objPost.texto = textoDescricao;
  objPost.ingredientes = ingredientesPost;
  objPost.receita = textoReceita;
  let nomeFoto = foto.split('');
  nomeFoto.splice(0, 12);
  nomeFoto = nomeFoto.toString().replaceAll(',', '');
  console.log(nomeFoto, 'nomeFoto');
  objPost.foto = `../img/posts/${nomeFoto}`;

  let vetorPost = JSON.parse(localStorage.getItem('post'));

  vetorPost.unshift(objPost);

  let postTeste = JSON.stringify(vetorPost);

  localStorage.setItem('post', postTeste);

  window.location.href = './perfil.html';
}
