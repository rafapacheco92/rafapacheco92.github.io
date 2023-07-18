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



var overlay = document.getElementById("overlay");

// botões pra mudar de página
var openSignUpButton = document.getElementById("slide-left-button");
var openSignInButton = document.getElementById("slide-right-button");

// sidebar
var leftText = document.getElementById("sign-in");
var rightText = document.getElementById("sign-up");

// forms
var accountForm = document.getElementById("sign-in-info")
var signinForm = document.getElementById("sign-up-info");

// Abrir pagina cadastro
openSignUp = () =>{
  leftText.classList.remove("overlay-text-left-animation-out");
  overlay.classList.remove("open-sign-in");
  rightText.classList.remove("overlay-text-right-animation");
  accountForm.className += " form-left-slide-out"
  rightText.className += " overlay-text-right-animation-out";
  overlay.className += " open-sign-up";
  leftText.className += " overlay-text-left-animation";
  setTimeout(function(){
    accountForm.classList.remove("form-left-slide-in");
    accountForm.style.display = "none";
    accountForm.classList.remove("form-left-slide-out");
  }, 700);
  setTimeout(function(){
    signinForm.style.display = "flex";
    signinForm.classList += " form-right-slide-in";
  }, 200);
}

// Abrir página de login
openSignIn = () =>{
  leftText.classList.remove("overlay-text-left-animation");
  overlay.classList.remove("open-sign-up");
  rightText.classList.remove("overlay-text-right-animation-out");
  signinForm.classList += " form-right-slide-out";
  leftText.className += " overlay-text-left-animation-out";
  overlay.className += " open-sign-in";
  rightText.className += " overlay-text-right-animation";
  setTimeout(function(){
    signinForm.classList.remove("form-right-slide-in")
    signinForm.style.display = "none";
    signinForm.classList.remove("form-right-slide-out")
  },700);
  setTimeout(function(){
    accountForm.style.display = "flex";
    accountForm.classList += " form-left-slide-in";
  },200);
}

openSignUpButton.addEventListener("click", openSignUp, false);
openSignInButton.addEventListener("click", openSignIn, false);