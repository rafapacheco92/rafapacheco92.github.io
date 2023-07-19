let btnUm = document.getElementById('btnUmNews')
let btnDois = document.getElementById('btnDoisNews')
let btnTres = document.getElementById('btnTresNews')
let btnQuatro = document.getElementById('btnQuatroNews')
let btnCinco = document.getElementById('btnCincoNews')
let btnSeis = document.getElementById('btnSeisNews')

let newsOne = document.querySelector('.newOne')
let newsTwo = document.querySelector('.newTwo')
let newsThree = document.querySelector('.newThree')
let newsFour = document.querySelector('.newFour')
let newsFive = document.querySelector('.newFive')
let newsSix = document.querySelector('.newSix')

let btnUmFecha = document.getElementById('btnUmFecha')
let btnDoisFecha = document.getElementById('btnDoisFecha')
let btnTresFecha = document.getElementById('btnTresFecha')
let btnQuatroFecha = document.getElementById('btnQuatroFecha')
let btnCincoFecha = document.getElementById('btnCincoFecha')
let btnSeisFecha = document.getElementById('btnSeisFecha')

btnUm.onclick = function () {
    newsOne.showModal()
}

btnUmFecha.onclick = function () {
    newsOne.close()
}

btnDois.onclick = function () {
    newsTwo.showModal()
}

btnDoisFecha.onclick = function () {
    newsTwo.close()
}

btnTres.onclick = function () {
    newsThree.showModal()
}

btnTresFecha.onclick = function () {
    newsThree.close()
}

btnQuatro.onclick = function () {
    newsFour.showModal()
}

btnQuatroFecha.onclick = function () {
    newsFour.close()
}

btnCinco.onclick = function () {
    newsFive.showModal()
}

btnCincoFecha.onclick = function () {
    newsFive.close()
}

btnSeis.onclick = function () {
    newsSix.showModal()
}

btnSeisFecha.onclick = function () {
    newsSix.close()
}