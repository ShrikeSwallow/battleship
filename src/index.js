import "./styles.css";
import Display from "./Display";

const display = new Display();
display.initialize();
display.drawNewGame();

const newGameBtn = document.querySelector(".new-game-button");
newGameBtn.addEventListener("click", () => {});
