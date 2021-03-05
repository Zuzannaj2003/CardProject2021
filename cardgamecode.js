function shuffle(deck) {
    for(let i = 0; i < 1000; i++){
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let temp = deck[location1];
        deck[location1] = deck[location2];
        deck[location2] = temp;
    }
}

function getDeck() {
    let deck = new Array();
// creates all the individual cards in the deck itself
    for(let i = 0; i < colours.length; i++){
        for(let j = 0; j < values.length; j++){
            let card = {Value: values[j], Colour: colours[i]}
            deck.push(card);
        }
    }
    return deck;
}

let colours = ["red", "black", "yellow"];
let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let deck = getDeck();
shuffle(deck);

let player1 = new Array();

let card1 = deck.pop([0]);
player1.push(card1);
console.log(player1);

let player2 = new Array();

let card2 = deck.pop([1]);
player2.push(card2);
console.log(player2);