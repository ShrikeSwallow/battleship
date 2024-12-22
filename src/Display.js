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
}
