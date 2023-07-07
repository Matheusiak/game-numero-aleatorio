function VerificaChute(chute) {
    const numero = +chute;

    if (chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor Inválido</div>';
        return;
    }
    if (numeroMaiorOuMenor(numero)){
        elementoChute.innerHTML += `
        <div>Valor Inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        return;
    }
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Voce Acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            
            <button id="jogar-novamente" class="btn-jogar" > Jogar Novamente </button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O Número Secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O Número Secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>
        `
    }
}
function gameOver(chute){
    if(chute === "game over") {
        document.body.innerHTML = `
        <h2>Game Over!!!<h2>
        <h3>Pressione o botão para jogar novamente</h3>
        <button id="jogar-novamente" class="btn-jogar"> Jogar novamente <i class="fa-solid fa-rotate-right fa-spin"></i> </button>
    `
    }
}

function chuteInvalido(numero){
    return Number.isNaN(numero)
}
function numeroMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})

