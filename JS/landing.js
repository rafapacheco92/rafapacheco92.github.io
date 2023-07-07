let nome
let celular
let senha
let confirmaSenha
let email
let confirmaEmail
let interesse
let users = []

function criaConta() {
 
    
let user = {
    nome: '',
    celular: '',
    senha: '',
    confirmaSenha: '',
    email: '',
    confirmaEmail: '',
    interesse: '',
}

if (email != confirmaEmail && senha != confirmaSenha){

    alert('E-mail e senha não conferem.')

}else if(email != confirmaEmail && senha == confirmaSenha){

    alert('E-mail não confere.')

}else if(email == confirmaEmail && senha != confirmaSenha){

    alert('Senha não confere.')
    
}else{

user.nome = (document.getElementById('nomeInp').value).toUpperCase(),
user.celular = (document.getElementById('celularInp').value),
user.senha = (document.getElementById('senhaInp').value),
user.confirmaSenha = (document.getElementById('confirmaSenhaInp').value),
user.email = (document.getElementById('emailInput').value).toLowerCase(),
user.confirmaEmail = (document.getElementById('confirmaEmailInp').value).toLowerCase(),
user.interesse = (document.getElementById('interesseInp').value).toUpperCase()
}

users = JSON.parse(localStorage.getItem('usersSalvos'))

if(users == null){

    users = []
    users.push(user)
    localStorage.setItem('usersSalvos', JSON.stringify(users))

}else{

    users.push(user)
    localStorage.setItem('usersSalvos', JSON.stringify(users))
    alert('Cadastro realizado com sucesso!')

}

limpaInput()
listaUsers()

}

function listaUsers(){
    let lista = ''
    users = JSON.parse(localStorage.getItem('usersSalvos'))

    if(users == null){
        lista = 'Nenhum cadastro localizado.'
    }else{
        for(i = 0; i < users.length; i++){

            lista = lista + Object.values(users[i]).join(' - ') + '<br>'
        
        }
    }

    console.log(lista)

}

function limpaInput(){

user.nome = ''
user.celular = ''
user.senha = ''
user.confirmaSenha = ''
user.email = ''
user.confirmaEmail = ''
user.interesse = ''

}



document.getElementById('tabPadrao').click()

function abreTab(event, idTab) {
    let conteudos = document.getElementsByClassName('conteudo')
    for (i = 0; i < conteudos.length; i++){
        conteudos[i].style.display = 'none'
    }
    
    document.getElementById(idTab).style.display = 'block'

    let tabs = document.getElementsByClassName('tabButton')
    for (i = 0; tabs.length; i++){
        tabs[i].className = tabs[i].className.replace('ativo', '')
    }

    event.currentTarget.className += ' ativo'

}