const click = function() {
    console.log("click");
}

/*
 * Create a list that holds all of your cards
 */
let deck = document.querySelectorAll("li");
let deckArray = [];
for (let i = 0; i < deck.length; i++) {
    deckArray[i] = document.querySelectorAll("li")[i].outerHTML;
}
console.log(deckArray);

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
const deal = function () {
    console.log(deck);
    console.log(deck.item("outerHTML"));
    /*
    let dealtCards = "";


    for (let i = 0; i < deck.length; i++) {
        dealtCards += deck.item("outerHTML");
        console.log(dealtCards)
    }

    document.querySelector("#deck").innerHTML;
    */
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle() {
    let currentIndex = deckArray.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = deckArray[currentIndex];
        deckArray[currentIndex] = deckArray[randomIndex];
        deckArray[randomIndex] = temporaryValue;
    }

    return deckArray;
}
const restart = document.querySelector(".restart");
restart.addEventListener("click", deal);

const flipCard = function (card) {
    card.srcElement.classList.toggle("open");
    card.srcElement.classList.toggle("show");
}



for (let i = 0; i < deck.length; i++) {
    deck[i].addEventListener("click", flipCard);
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
