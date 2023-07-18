let nome
let senha
let email
let users = []
let usersDb = []

function criaConta() {
 
    
let user = {
    nome: '',
    senha: '',
    email: '',
}



function usersLocalStorage() {
//   vetorUsers = JSON.stringify(localStorage.getItem('usersLoc'));

//   if (vetorUsers === 'null') {
    
//     let usersJ = JSON.stringify(users);
//     localStorage.setItem('post', usersJ);
//   }

    user = {
    nome:  (document.getElementById('nomeInp').value).toUpperCase(),
    senha: (document.getElementById('senhaInp').value),
    email: (document.getElementById('emailInp').value).toLowerCase(),
}

    vetorUsers = JSON.parse(localStorage.getItem('usersDb'))
    

    if(vetorUsers === 'null'){

        users.push(user)
        usersDb = localStorage.setItem('usersDb', JSON.stringify(users))

    }else{
        
        users = JSON.parse(localStorage.getItem('usersDb'))
        users.push(user)
    
        localStorage.setItem('usersDb', JSON.stringify(users))
        alert('Cadastro realizado com sucesso!')

}
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

// function limpaInput(){

// user.nome = ''
// user.senha = ''
// user.email = ''

// }

