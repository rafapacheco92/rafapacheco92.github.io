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