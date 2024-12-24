import Display from "./Display";
import { display } from "./index.js";

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
