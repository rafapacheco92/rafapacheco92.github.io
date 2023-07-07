let ingredientesPost = []
let textoDescricao
let textoReceita
let tituloReceita
let divPosts = document.getElementById('posts')


function newIngrediente(){
	let clone = document.getElementById('origem').cloneNode(true);
	let destino = document.getElementById('newInputDiv');
	destino.appendChild (clone);
	
    let divClonada = clone.getElementsByTagName('div')
	let labelClonado = clone.getElementsByTagName('label');
	let inputClonado = clone.getElementsByTagName('input');

    for(i = 0; i < divClonada.length; i++){
		divClonada[i].value = '';
	}

	for(i = 0; i < labelClonado.length; i++){
		labelClonado[i].value = '';
	}

    for(i = 0; i < inputClonado.length; i++){
		inputClonado[i].value = '';
	}
	

	
}

function addIngredientes() {
    ingredientesDoInput = document.querySelectorAll('.ingredienteInput')
    textoReceita = document.getElementById('receitaTexto').value
    textoDescricao = document.getElementById('textoDrink').value
    tituloReceita = document.getElementById('nomeDrink').value
    for (i = 0; i < ingredientesDoInput.length; i++){
        ingredientesPost.push(ingredientesDoInput[i].value)
    }
    console.log(tituloReceita)
    console.log(ingredientesPost)
    console.log(textoReceita)
    console.log(textoDescricao)
}

function criaPost(r){
  
    let sectionNewPost = document.createElement('article')
    divNewPost.setAttribute('class', 'conteudo')
    divNewPost.setAttribute('aria-labelledby', 'label-introducao')

    let divNewPost = document.createElement('div')
    divNewPost.setAttribute('class', 'introducao')
    divNewPost.setAttribute('id', 'introducao')
    sectionNewPost.appendChild(divNewPost)
    
    let tituloPost = document.createElement('h2')
    tituloPost.setAttribute('id', 'label-introducao')
    let textoTituloPost = document.createTextNode(tituloReceita)
    tituloPost.appendChild(textoTituloPost)
    divNewPost.appendChild(tituloPost)
  
    let descricao = document.createElement('p')
    descricao.setAttribute('id', 'texto-conteudo')
    descricao.setAttribute('class', 'textoConteudo')
    let textoDescricaoDrink = document.createTextNode(textoDescricao)
    descricao.appendChild(textoDescricaoDrink)
    divNewPost.appendChild(descricao)
  
    // let listaIngredientesPost = document.createElement('ul')
  
    // for(i = 0; i < r.ingredientes.length; i++){
    //   let item = document.createElement('li')
    //   let textoIngredientes = document.createTextNode(r.ingredientes[i])
    //   item.appendChild(textoIngredientes)
    //   listaIngredientes.appendChild(item)
    // }
    
    // divReceita.appendChild(listaIngredientes)   
    
    let btnNewPost = document.createElement('a')
    descricao.setAttribute('class', 'botao')
    let textoBtn = document.createElement('p')
    let conteudoTextoBtn = document.createTextNode('RECEITA')
    textoBtn.appendChild(conteudoTextoBtn)
    btnNewPost.appendChild(textoBtn)
    divNewPost.appendChild(btnNewPost)

    let divNewPic = document.createElement('div')
    divNewPic.setAttribute('class', 'imagemIntro')

    let newPic = document.createElement('img')
    newPic.setAttribute('src', '#')
    divNewPic.appendChild(newPic)

    sectionNewPost.appendChild(divNewPost)
    sectionNewPost.appendChild(divNewPic)
    divPosts.appendChild(sectionNewPost)
  
  
  }