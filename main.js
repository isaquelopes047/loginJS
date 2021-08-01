
let buttonLogin = document.querySelector('.button_login');

buttonLogin.addEventListener('click', function(){

    let inputName = document.querySelector('.LoginName').value
    let inputPass = document.querySelector('.LoginPass').value
    
    let acessoNegado = document.querySelector('.acesso_negado');
        acessoNegado.classList.add('acesso_negado');

    const url = './logado.html';

    class Usuarios{
        nome;
        senha;
    }
        const usuario1 = new Usuarios();
            usuario1.nome = 'admin';
            usuario1.senha = 123;
            
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

    if(inputName.length == 0){

        acessoNegado.textContent = 'VOCÊ PRECISA DIGITAR ALGO!';
        
        return false;
    }

    else{
        acessoNegado.textContent = 'ACESSO NEGADO';

        return false;
    }

})


function alert(){
    setTimeout(function(){
        document.querySelector('.acesso_negado').style.display = 'none'
    }, 3000)
}
