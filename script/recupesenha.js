var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click',function(){

    if (iconMenu.getAttribute("src") == 'img/menu.png') {
        iconMenu.setAttribute("src","img/close.png");
    }else{
        iconMenu.setAttribute("src","img/menu.png");
    }

   menu.classList.toggle('active');
});


//Parte RECUP. SENHA
let email = document.getElementById('psw');
let btn = document.getElementById('btn1');
let filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

btn.addEventListener('click',function(evt){
    evt.preventDefault()
})
btn.addEventListener('click', validacao)

function validacao() {
    
    if(email.value === ""){
        alert("Preencha o campo com o seu e-mail")
    }else if(!filtro.test(email.value)){
        alert("E-mail inválido. Tente novamente.")
    }else{
        alert("código enviado com sucesso, verifique seu email.");
        window.location.href = "login.html"
    }
} 