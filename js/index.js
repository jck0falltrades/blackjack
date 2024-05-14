const parentBtn = document.getElementById("p-btn");
const jb = document.getElementById("jb");
const btn = document.getElementById("start-btn");
let newCard = 0;
let sum = 0;
let cards = [];


function randomCard() {
  let randNum = Math.floor(Math.random() * 13) + 1;
  if (randNum === 1) {
    newCard = 11;
  } else if (randNum >= 10) {
    newCard = 10;
  } else {
    newCard = randNum;
  }
  return newCard;
}

function drawFunc() {
  randomCard();
  cards.push[newCard];
  sum += newCard;
  document.getElementById("total-el").textContent = sum;
  document.getElementById("cards-el").textContent += " " + newCard;
  checkSum();
  console.log(newCard);
}

function start() {
  jb.setAttribute("src", "img/jb_start.jpg");
  cards[0] = randomCard();
  cards[1] = randomCard();
  sum = cards[0] + cards[1];
  document.getElementById("cards-el").textContent =
    "Cards: " + cards[0] + " " + cards[1];
  document.getElementById("total-el").textContent = "Sum: " + sum;
  checkSum();
}

function checkSum() {
  if (sum > 21) {
    jb.setAttribute("src", "img/jb_lose.jpg");
    console.log("You lose! Good day, sir!");
    btn.setAttribute("onclick", "start()");
    btn.textContent = "New Game";
    document.getElementById("message").textContent = "You lose! Good day, sir!";
  } else if (sum > 0 && sum < 21) {
    console.log("Draw again?");
    document.getElementById("message").textContent = "Draw again?";
    btn.textContent = "Hit Me!";
    btn.setAttribute("onclick", "drawFunc()");
  } else if (sum === 21) {
    jb.setAttribute("src", "img/jb_win.jpg");
    console.log("You win!");
    parentBtn.removeChild(btn);
    document.getElementById("message").textContent =
      "You win. ...And the house never loses. Go away now!";
  } else if (sum === 0) {
    document.getElementById("message").textContent = "Click Start to Begin";
  }
}

checkSum();
