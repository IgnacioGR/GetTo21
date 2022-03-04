let firstCard;
let secondCard;
let score;
let message = document.getElementById("message-el");
const buttonContainer = document.getElementById("button-container");
let cardCount = document.getElementById("card-count");
let scoreCount = document.getElementById("score-count");
let newCard;
let getCardButton;
let startButton;
let player = {
	name: "Guest",
	chips: 0,
};
let chipCount = document.getElementById("player");

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	number = Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
	if (number === 1) {
		return 11;
	} else if (number > 10) {
		return 10;
	}
	return number;
}

function chipUpdater(chips) {
	player.chips += chips;
	chipCount.textContent = player.name + ": " + player.chips;
}

function startGame() {
	// resetting game state
	firstCard = getRandomIntInclusive(1, 13);
	secondCard = getRandomIntInclusive(1, 13);
	score = firstCard + secondCard;
	message.textContent = "Good Luck My Friend";
	// resetting game state

	// taking chips to start the game
	chipUpdater(-1);
	// taking chips to start the game

	// creating getCard button
	getCardButton = document.createElement("button");
	buttonContainer.appendChild(getCardButton);
	getCardButton.setAttribute("id", "get-card");
	getCardButton.setAttribute("onclick", "getNewCard()");
	getCardButton.textContent = "Get Card";
	// creating getCard button

	// converting startGame to stopGame
	startButton = document.getElementById("start-game");
	startButton.textContent = "Stop Game";
	startButton.setAttribute("onclick", "stopGame()");
	// converting startGame to stopGame

	// adding initial cards
	cardCount.textContent = "Cards: " + firstCard + " " + secondCard;
	scoreCount.textContent = "Your Score: " + score;
	// adding initial cards

	// stopping game if score <= 21
	if (score >= 21) {
		stopGame();
	}
	// stopping game if score <= 21
}

function getNewCard() {
	newCard = getRandomIntInclusive(1, 13);
	score += newCard;
	scoreCount.textContent = "Your Score: " + score;
	cardCount.textContent += " " + newCard;

	// stopping game if score <= 21
	if (score >= 21) {
		stopGame();
	}
	// stopping game if score <= 21
}

function stopGame() {
	if (score === 21) {
		message.textContent = "Nice. You got to 21";
		chipUpdater(10);
	} else if (score > 21) {
		message.textContent = "You lost. Better luck next time";
		chipUpdater(-(score - 21));
	} else {
		message.textContent = "You were " + (21 - score) + " off of getting to 21";
		chipUpdater(-(21 - score));
	}

	getCardButton.parentNode.removeChild(getCardButton);
	startButton.textContent = "Start Game";
	startButton.setAttribute("onclick", "startGame()");
}

// getting players name
player.name = window.prompt("Enter Your Name For This Session");

if (player.name === null || player.name === " " || player.name === "") {
	player.name = "Guest";
}
console.log(player.name);
// getting players name

// creating player chip count
chipUpdater(100);
// creating player chip count
