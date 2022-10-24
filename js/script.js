//Variaveis, arrays, etc
let cards;
let card1, card2;
let card0 = true;
let clicks = 0;
let end =0;
let time;
const cardParrot = [
    "back1",
    "back2",
    "back3",
    "back4",
    "back5",
    "back6",
    "back7"
];
const cardParrotPair = [];

//functions
startGame()
timer()

function startGame(){
    let start = true;

    while(start){
        cards = Number(prompt("Quantidade de cartas desejadas:"));
        if( cards == 4 || cards == 6 || cards == 8 || cards == 10 || cards == 12 || cards == 14 ){
            start = false;
            const ul = document.querySelector('.container');

            for(i=1; i <= cards; i++){
                ul.innerHTML += `<div id="${i}" onclick="rotateCard(this)"class="card front"></div>`
            }

            for(i=0; i<cards/2; i++){
                cardParrotPair.push(cardParrot[i],cardParrot[i]);
            }
            cardParrotPair.sort(() => Math.random() - 0.5);

        }else{
            alert("Digite apenas números pares entre 4 e 14.");
        }
    }
}

function rotateCard(card){
    if(card.classList.length !==3){
        card.classList.add('back',cardParrotPair[card.id-1]);
        setTime(card);
    }
}

function setTime(card){
    setTimeout(function(){
        if(card0){
            clicks++;
            card1 = card;
            card0 = false;
        }else{
            card2 = card;
            if(card1.classList[3] !== card2.classList[3]){
                card1.classList = "card front";
                card2.classList = "card front";
            }else{
              end++;
                if(cards/2 === end){
                    clearInterval(this.loop);
                    alert(`Você terminou o jogo com ${clicks} jogadas e em ${time.innerHTML} segundos!`);
                    reloadGame();
                }
            }
            card0 = true;
        }
        },1000);
}

function timer(){
    time = document.querySelector('.timer');

    this.loop = setInterval(function(){

        const counterTime = +time.innerHTML;
        time.innerHTML = counterTime + 1;
    },1000);
}

function reloadGame(){

    let end = true;

    while(end){
        reload = prompt("Deseja jogar mais uma vez?");
    if(reload === "sim"){
        location.reload();
        end = false;
    }if(reload === "não"){
        alert('Obrigado por jogar!');
        end = false;
    }else{
        alert("Digite 'sim' para jogar novamente ou 'não' para cancelar!");
    }

    } 
}
