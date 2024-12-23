export default class Display {
  constructor() {}
  initialize = () => {
    const body = document.body;
    const header = document.createElement("header");
    const main = document.createElement("main");

    const title = document.createElement("h1");
    title.textContent = "Battleships";
    header.appendChild(title);
    body.appendChild(header);
    body.appendChild(main);
  };
  drawNewGame = () => {
    const main = document.querySelector("main");
    main.innerHTML = "";
    const controlBtns = document.createElement("div");
    controlBtns.classList.add("control-buttons");
    const newGameBtn = document.createElement("button");
    newGameBtn.classList.add("new-game-button");
    newGameBtn.textContent = "New Game";
    controlBtns.appendChild(newGameBtn);
    main.appendChild(controlBtns);
  };
}
