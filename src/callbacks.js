import { display } from "./index.js";
import Player from "./Player.js";

export const prepNewGame = () => {
  display.toggleNewGameBtn();
  display.toggleStartForm();
  const vsP2 = document.querySelector("#vs-p2");
  const vsCpu = document.querySelector("#vs-cpu");
  vsP2.addEventListener("click", display.showP2);
  vsCpu.addEventListener("click", display.hideP2);
};

export const resetGame = () => {
  display.toggleNewGameBtn();
  display.toggleStartForm();
  display.hideP2();
};

export const startGame = (event) => {
  event.preventDefault();
  console.log(event);
  const p1 = document.querySelector("#p1");
  const p2 = document.querySelector("input[name='versus-mode']:checked");
  console.log(p2.value);
  const playerOne = new Player(p1.value, "p1");
  const playerTwo = new Player(p2.value, "p2");
};
