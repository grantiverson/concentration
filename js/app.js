/* FUNCTIONS */

//function shows the card clicked
const showCard = function (card) {
    if (openCards.length > 1) {
        hideCards();
    }
    card.srcElement.classList.add("open");
    card.srcElement.classList.add("show");
    openCards.push(card.srcElement.outerHTML);
    if (openCards.length > 1) {
        checkCards();
    }

    counterUp();
}

//function adds ".match" if two cards match
const checkCards = function () {
    for (var i = 0; i < openCards.length; i++) {
        for (var j = 0; j < openCards.length; j++) {
            if (openCards[i] === openCards[j] && i != j) {
                document.querySelectorAll(".open")[j].classList.add("match")
            }
        }
    }

}

//hides all "shown" cards
const hideCards = function () {
    for (var i = 0; i < deckArray.length; i++) {
        deck[i].classList.remove("show");
        deck[i].classList.remove("open");
    }

    openCards = [];
}

//function rearranges the order of the cards on the page
const deal = function () {
    //shuffle the list
    let currentIndex = deckArray.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = deckArray[currentIndex];
        deckArray[currentIndex] = deckArray[randomIndex];
        deckArray[randomIndex] = temporaryValue;
    }

    //loop through each card and create its HTML
    let dealtCards = "";

    for (let i = 0; i < deckArray.length; i++) {
        dealtCards += deckArray[i]
    }

    //add cards' HTML to the page
    document.querySelector("#deck").innerHTML = dealtCards;

    //add "Click a card" event listeners
    for (let i = 0; i < deck.length; i++) {
        deck[i].addEventListener("click", showCard);
    }

    //re-generates the deck array and hides all cards
    deck = document.querySelectorAll("li");
    makeDeckArray();
    hideCards();
    moves = 0;
    document.querySelector("span").textContent = moves;
}

//function generates the deck array
function makeDeckArray() {
    for (let i = 0; i < deck.length; i++) {
        deckArray[i] = document.querySelectorAll("li")[i].outerHTML;

        for (let i = 0; i < deck.length; i++) {
            deck[i].addEventListener("click", showCard);
        }
    }
}

//function that controls the counter
const counterUp = function () {
    moves++;
    document.querySelector("span").textContent = moves;
    if (document.querySelectorAll(".match").length === 16) {
        finished();
    }
}

//function that creates an alert when all matches have been made
const finished = function () {
    setTimeout(function() {
            alert("You won with " + moves + " moves!");
                deal();
        }, 100);
}

/* VARIABLES */

//NodeList of cards
let deck = document.querySelectorAll("li");
//Array of cards
let deckArray = [];
//Array of "open" cards
let openCards = [];

//Move counter
let moves = 0;

/* OTHER CODE */

makeDeckArray();

//deal();

//"Restart" event listener
const restart = document.querySelector(".restart");
restart.addEventListener("click", deal);

//"Click a card" event listener
for (let i = 0; i < deck.length; i++) {
    deck[i].addEventListener("click", showCard);
}
