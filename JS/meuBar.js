let container = document.getElementById('containerA')
let checkboxVodka = document.getElementById("Vodka");
let checkboxWhisky = document.getElementById("Whisky");
let checkboxCachaca = document.getElementById("Cachaca");
let checkboxRum = document.getElementById("Rum");
let checkboxVermute = document.getElementById("Vermute");
let checkboxGin = document.getElementById("Gin");
let checkboxTequila = document.getElementById("Tequila");
let checkboxLicor = document.getElementById("Licor");
let checkboxCampari = document.getElementById("Campari");
let checkboxConhaque = document.getElementById("Conhaque");
let checkboxCerveja = document.getElementById("Cerveja");
let conteudoContainer = ''


function resultadoDiv(r){
  let divReceita = document.createElement('div')
  divReceita.setAttribute('class', 'cardReceita')

  let titulo = document.createElement('h2')
  titulo.setAttribute('class', 'tituloDrink')
  let textoTitulo = document.createTextNode(r.nome)
  titulo.appendChild(textoTitulo)
  divReceita.appendChild(titulo)

  let foto = document.createElement('img')
  foto.setAttribute('src', r.foto)
  foto.setAttribute('class', 'fotoBar')
  divReceita.appendChild(foto)


  let ingredientesTitulo = document.createElement('h3')
  let textoIngredientesTitulo = document.createTextNode('INGREDIENTES')
  ingredientesTitulo.appendChild(textoIngredientesTitulo)
  divReceita.appendChild(ingredientesTitulo)

  let listaIngredientes = document.createElement('ul')

  for(i = 0; i < r.ingredientes.length; i++){
    let item = document.createElement('li')
    let textoIngredientes = document.createTextNode(r.ingredientes[i])
    item.appendChild(textoIngredientes)
    listaIngredientes.appendChild(item)
  }
  
  divReceita.appendChild(listaIngredientes)    


  let tituloPreparo = document.createElement('h3')
  let textoTituloPreparo = document.createTextNode('MODO DE PREPARO')
  tituloPreparo.appendChild(textoTituloPreparo)
  divReceita.appendChild(tituloPreparo)

  let texto = document.createElement('p')
  texto.setAttribute('class', 'cardTexto')
  let textoPreparo = document.createTextNode(r.preparo)
  texto.appendChild(textoPreparo)
  divReceita.appendChild(texto)


  document.getElementById('recebeDiv').appendChild(divReceita)


}
let bar = []
let receitasBar = []

function Receitas(){

if (checkboxVodka.checked) {

  bar.push('vodka')

}

if (checkboxTequila.checked){

  bar.push('tequila')

}

if (checkboxLicor.checked){
  
  bar.push('licor')

}

if (checkboxCachaca.checked){

  bar.push('cachaça')

}

if(checkboxVermute.checked){

  bar.push('vermute')

}

if(checkboxRum.checked){

  bar.push('rum')

}
if(checkboxGin.checked){

  bar.push('gin')

}

if (checkboxCampari.checked) {

  bar.push('campari')

}

if (checkboxWhisky.checked) {

  bar.push('whisky')

}

if (checkboxConhaque.checked) {

  bar.push('conhaque')

}

if (checkboxCerveja.checked) {

  bar.push('cerveja')

}



for (i = 0; i < receitas.length; i++){
  pertence = true
  for(j = 0; j < receitas[i].alcool.length; j++){
    if (bar.indexOf(receitas[i].alcool[j]) == -1){
    pertence = false
    // console.log(j)
  }
    
}
if(pertence == true){
    receitasBar.push(receitas[i])
}
}


for (k = 0; k < receitasBar.length; k++){
  console.log(receitasBar)
  resultadoDiv(receitasBar[k])
}



}