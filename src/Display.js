export default class Display {
  constructor() {}
  initialize = () => {
    const body = document.body;
    const header = document.createElement("header");
    const main = document.createElement("main");

    const title = document.createElement("h1");
    title.textContent = "Battleships";
    header.appendChild(title);

    const controls = document.createElement("div");
    controls.classList.add("controls");
    main.appendChild(controls);

    body.appendChild(header);
    body.appendChild(main);
  };
  drawNewGame = () => {
    const controls = document.querySelector(".controls");
    const newGameBtn = document.createElement("button");
    newGameBtn.classList.add("new-game-button");
    newGameBtn.setAttribute("type", "button");
    newGameBtn.textContent = "New Game";
    controls.appendChild(newGameBtn);
  };
  drawStartForm = () => {};
}
