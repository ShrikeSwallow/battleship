import Display from "./Display";
import { display } from "./index.js";

export const startNewGame = () => {
  display.toggleNewGameBtn();
  display.toggleStartForm();
};
