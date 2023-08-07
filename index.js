let mssge = "";
let cards = document.getElementById("cards");
let sumEl = document.getElementById("sumEl");
let firstcard = 10;
let secCard = 3;
let sum = firstcard + secCard;
let card = [firstcard, secCard];
let hasBlackJack = false;
let isAlive = true;
let message = document.getElementById("mssge");

function startGame() {
  render();
}

function render() {
  cards.textContent = "Cards : " + card[0] + " , " + card[1];
  sumEl.textContent = "Sum : " + sum;
  if (sum <= 20) {
    mssge = "Do you want to Draw New Card ?";
  } else if (sum === 21) {
    mssge = "You've got Blackjack !";
    hasBlackJack = true;
  } else {
    mssge = "You're out of the Game !";
    isAlive = false;
  }
  message.textContent = mssge;
}
function newCard() {
  let card = 8;
  sum += card;
  startGame();
}
