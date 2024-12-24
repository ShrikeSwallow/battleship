import "./styles.css";
import Display from "./Display";
import { prepNewGame } from "./callbacks";

export const display = new Display();
display.initialize();
display.drawNewGame();
display.drawStartForm();

const newGameBtn = document.querySelector(".new-game-button");
newGameBtn.addEventListener("click", prepNewGame);
