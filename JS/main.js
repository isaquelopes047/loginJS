
let buttonLogin = document.querySelector('.button_login');

let acessoNegado = document.querySelector('.acesso_negado');
    acessoNegado.classList.add('acesso_negado');

buttonLogin.addEventListener('click', function(){

    const inputName = document.querySelector('.LoginName').value
    const inputPass = document.querySelector('.LoginPass').value

    localStorage.setItem('nome', inputName)

    const url = './logado.html';

    class Usuarios{
        nome;
        senha;
    }
        const usuario1 = new Usuarios();
            usuario1.senha = 123;
            usuario1.nome = 'admin';
        
        const usuario2 = new Usuarios();
            usuario2.nome = 'Isaque';
            usuario2.senha = 9116;
    
        //validação
        let UsuarioOne = inputName == usuario1.nome && inputPass == usuario1.senha;
        let UsuarioTwo = inputName == usuario2.nome && inputPass == usuario2.senha;

    if(UsuarioOne){
        window.location = url;

        return true;
    }

    if(UsuarioTwo){
        window.location = url;

        return true;
    }

    else{
        acessoNegado.textContent = 'ACESSO NEGADO';

        timeOn();
        timeOut();

        return false;
    }

})

function timeOn(){
    setTimeout(function(){
        acessoNegado = document.querySelector('.acesso_negado').style.display = 'block';
    }, 50)
}

function timeOut(){
    setTimeout(function(){
        acessoNegado = document.querySelector('.acesso_negado').style.display = 'none';
    }, 3000)
}
