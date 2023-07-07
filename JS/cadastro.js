 let nome
 let celular
 let senha
 let confirmaSenha
 let email
 let confirmaEmail
 let interesse
 let users = []

 
 function criaConta() {
 
    if (email == confirmaEmail && senha == confirmaSenha){

let user = {
 nome: (document.getElementById('nomeInp').value).toUpperCase(),
 celular: (document.getElementById('celularInp').value),
 senha: (document.getElementById('senhaInp').value),
 confirmaSenha: (document.getElementById('confirmaSenhaInp').value),
 email: (document.getElementById('emailInput').value).toLowerCase(),
 confirmaEmail: (document.getElementById('confirmaEmailInp').value).toLowerCase(),
 interesse: (document.getElementById('interesseInp').value).toUpperCase(),
}


}else if(email != confirmaEmail && senha != confirmaSenha){

    alert('E-mail e senha não conferem.')

}else if(email != confirmaEmail && senha == confirmaSenha){

    alert('E-mail não confere.')

}else{

    alert('Senha não confere.')

}

users.push(user)

localStorage.setItem(cadastros, users)

console.log(users)

}