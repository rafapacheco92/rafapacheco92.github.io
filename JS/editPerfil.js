fillData()


function editInfo(){
  let bancoUsers = JSON.parse(localStorage.getItem('usersDb'))
  let bioAside = JSON.parse(localStorage.getItem('usersAside'));
  let userLogado = JSON.parse(localStorage.getItem('userLogado'));
  let postsA = JSON.parse(localStorage.getItem('post'));

  nome = document.getElementById('nameEdit').value
  email = document.getElementById('emailEdit').value
  senha = document.getElementById('passEdit').value
  bio = document.getElementById('bioEdit').value

  for (let i = 0; i < postsA.length; i++){
    if(postsA[i].autor == userLogado.nome){
    postsA[i].autor = nome
  }
  }


  for (i = 0; i < bancoUsers.length; i++){
    if(bancoUsers[i].email == userLogado.email){
      bancoUsers[i].nome = nome
      bancoUsers[i].email = email
      bancoUsers[i].senhaEdit = senha
      bioAside[i] = bio
      userLogado.nome = nome
    }
  }

  let postsAtt = JSON.stringify(postsA)
  let bancoUsersNew = JSON.stringify(bancoUsers)
  let bioAsideNew = JSON.stringify(bioAside)
  let userLogadoNew = JSON.stringify(userLogado)

  localStorage.setItem('post', postsAtt)
  localStorage.setItem('usersDb', bancoUsersNew)
  localStorage.setItem('usersAside', bioAsideNew)
  localStorage.setItem('userLogado', userLogadoNew)

  alert('Dados alterados com sucesso.')
  goToHome()

}

function removeAcc() {
  let decisao = prompt('Você tem certeza que quer deletar sua conta? Seus dados serão excluídos permanentemente. Digite concordo para continuar, ou cancelar para voltar.')


  if (decisao == 'concordo'){
  let usersBanco = JSON.parse(localStorage.getItem('usersDb'))
  let loggedUser = JSON.parse(localStorage.getItem('userLogado'));
  let indexDelete
  for (i = 0; i < usersBanco.length; i++) {

    if (loggedUser.email === usersBanco[i].email) {

      indexDelete = i

    }

  }

  usersBanco.splice(indexDelete, 1)

  localStorage.setItem('usersDb', JSON.stringify(usersBanco));
  userLogout = JSON.stringify(localStorage.getItem('userLogado'));
  userLogout = ''
  localStorage.setItem('userLogado', userLogout);
  alert('Sua conta foi excluída.')
  window.location.href = '../index.html';
  } else {
    window.location.href = './perfil.html';
}
}


function fillData(){

  bancoUsers = JSON.parse(localStorage.getItem('usersDb'))
  bioAside = JSON.parse(localStorage.getItem('usersAside'));
  userLogado = JSON.parse(localStorage.getItem('userLogado'));

  nomeEdit = document.getElementById('nameEdit')
  emailEdit = document.getElementById('emailEdit')
  senhaEdit = document.getElementById('passEdit')
  bioEdit = document.getElementById('bioEdit')

  for (i = 0; i < bancoUsers.length; i++){

    if(bancoUsers[i].email == userLogado.email){
  nomeEdit.value = bancoUsers[i].nome
  emailEdit.value = bancoUsers[i].email
  senhaEdit.value = bancoUsers[i].senhaEdit
  bioEdit.value = bioAside[i]
}
}
}

function goToHome() {
  window.location.href = './perfil.html';
}
