
let nameLogado = document.querySelector('.nameUser');
    nameLogado.textContent = `${localStorage.nome}`

let bemVindo = document.querySelector('.bemVindo');
    bemVindo.textContent = `Bem vindo ${localStorage.nome}.`;


let buttonHelp = document.querySelector('.buttonHelp');
let InfoText = 'Escolha um dos produtos clicando nas opções.'

buttonHelp.addEventListener('mouseenter', function(){

    let buttonInfo = document.querySelector('.buttonHelp');
    let textInfo = document.querySelector('.classTextHelp');
    let icon = document.querySelector('.fa-question');

        buttonInfo.style.width = '300px';
        buttonInfo.style.transition = '0.3s';
        textInfo.style.display = 'block';
        icon.style.display = 'none'

    textInfo.textContent = InfoText;
})

buttonHelp.addEventListener('mouseleave', function(){

    let buttonInfo = document.querySelector('.buttonHelp');
    let textInfo = document.querySelector('.classTextHelp');
    let icon = document.querySelector('.fa-question');

        buttonInfo.style.width = '50px';
        textInfo.style.display = 'none';
        icon.style.display = 'block'
})