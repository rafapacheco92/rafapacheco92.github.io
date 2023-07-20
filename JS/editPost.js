editPost();

function editPost() {
  let objPostEdit = JSON.parse(localStorage.getItem('postEdit'));
  document.getElementById('nomeDrink').value = objPostEdit.nome;
  createInput(objPostEdit);
  document.getElementById('textoDrink').value = objPostEdit.texto;
  document.getElementById('receitaTexto').value = objPostEdit.receita;
  document.getElementById('foto').value = objPostEdit.foto;
}

function createInput(objPostEdit) {
  let divIngredientes = document.getElementById('ingredientesEdit');
  for (i = 0; i < objPostEdit.ingredientes.length; i++) {
    let divInpLab = document.createElement('div');
    divInpLab.setAttribute('class', 'inpLab');
    let label = document.createElement('label');
    let textoLabel = document.createTextNode('Ingrediente: ');
    label.appendChild(textoLabel);
    divInpLab.appendChild(label);
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'inputsEdit');
    divInpLab.appendChild(input);
    divIngredientes.appendChild(divInpLab);
    input.value = objPostEdit.ingredientes[i];
  }
}

function publicEditedPost() {
  let ingredientesPost = [];
  let objPostEdit = JSON.parse(localStorage.getItem('postEdit'));
  let objPost = { nome: '', texto: '', ingredientes: '', receita: '', id: '' };
  ingredientesDoInput = document.querySelectorAll('.inputsEdit');
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
  objPost.id = objPostEdit.id;
  objPost.foto = objPostEdit.foto;
  objPost.fotoAutor = objPostEdit.fotoAutor;
  objPost.autor = objPostEdit.autor;

  let vetorPost = JSON.parse(localStorage.getItem('post'));

  vetorPost.splice(objPost.id, 1, objPost);

  let postTeste = JSON.stringify(vetorPost);

  localStorage.setItem('post', postTeste);
  goToHome();
}

function remove() {
  console.log('Removing');
  let objPostEdit = JSON.parse(localStorage.getItem('postEdit'));

  let vetorPost = JSON.parse(localStorage.getItem('post'));
  vetorPost.splice(objPostEdit.id, 1);

  localStorage.setItem('post', JSON.stringify(vetorPost));

  console.log(vetorPost, 'objPostEdit');
  goToHome();
}

function goToHome() {
  localStorage.removeItem('postEdit');
  window.location.href = './perfil.html';
}
