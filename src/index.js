import "./styles.css";
import Display from "./Display";
import { prepNewGame, resetGame, startGame } from "./callbacks";

export const display = new Display();
export const players = [];
display.initialize();
display.drawNewGame();
display.drawStartForm();
display.drawBoardsContainer();

const newGameBtn = document.querySelector(".new-game-button");
newGameBtn.addEventListener("click", prepNewGame);

const startForm = document.querySelector(".start-form");
startForm.addEventListener("reset", resetGame);
startForm.addEventListener("submit", startGame);
