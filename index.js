let firstCard;
let secondCard;
let score;
let message = document.getElementById("message-el");
const textContainer = document.getElementById("text-container");
let cardCount = document.getElementById("card-count");
let scoreCount = document.getElementById("score-count");
let newCard;
let getCardButton;
let startButton;

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function startGame() {
	// resetting game state
	firstCard = getRandomIntInclusive(1, 11);
	secondCard = getRandomIntInclusive(1, 11);
	score = firstCard + secondCard;
	message.textContent = "Good Luck My Friend";
	// resetting game state

	// creating getCard button
	getCardButton = document.createElement("button");
	textContainer.appendChild(getCardButton);
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
	newCard = getRandomIntInclusive(1, 11);
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
		message.textContent = "Nice. You got BlackJack";
	} else if (score > 21) {
		message.textContent = "You lost. Better luck next time";
	} else {
		message.textContent = "You were " + (21 - score) + " off of getting to 21";
	}

	getCardButton.parentNode.removeChild(getCardButton);
	startButton.textContent = "Start Game";
	startButton.setAttribute("onclick", "startGame()");
}
