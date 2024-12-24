import "./styles.css";
import Display from "./Display";
import { prepNewGame, resetGame } from "./callbacks";

export const display = new Display();
display.initialize();
display.drawNewGame();
display.drawStartForm();

const newGameBtn = document.querySelector(".new-game-button");
newGameBtn.addEventListener("click", prepNewGame);

const startForm = document.querySelector(".start-form");
startForm.addEventListener("reset", resetGame);
