
let nameLogado = document.querySelector('.nameUser');
nameLogado.textContent = `${localStorage.nome}`

let bemVindo = document.querySelector('.bemVindo');

bemVindo.textContent = `Bem vindo ${localStorage.nome}.`;