
const emojis = [
    "📚",
    "📚",
    "🔎",
    "🔎",
    "💻",
    "💻",
    "💲",
    "💲",
    "😁",
    "😁",
    "🤡",
    "🤡",
    "🥳",
    "🥳",
    "🤷‍♂️",
    "🤷‍♂️", // botao do windows + . = aparece cx de emojis. Colocar pares de emojis que escolher
]; // aqui cada carta selecionada será salva na memoria
let openCards = [];  // cartas salvas aqui

let shufflerEmojis = emojis.short(() => (Math.random() > 0.5 ? 2 : -1)); // .short() cria uma ordenação de acordo com alguma função / (Math.random() > 0.5 -> se esse num aleatório for maior que 0.5, ? 2 ... caso não - : -1. ESSA É A MELHOR MANEIRA DE DEIXAR TOTALMENTE RANDOMICO

for(let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shufflerEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if(openCards.length == 2){
        setTimeout(checkMatch, 500);
    }
    console.log(openCards)
}

function checkMatch(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove;("boxOpen");
        openCards[1].classList.remove;("boxOpen");
    }

    openCards = [];

    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("you winn");
    }
}