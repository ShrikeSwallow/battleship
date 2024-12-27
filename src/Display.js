import { players } from "./index.js";
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
  drawStartForm = () => {
    const controls = document.querySelector(".controls");
    const startForm = document.createElement("form");
    startForm.classList.add("start-form", "hidden");

    const legend = document.createElement("legend");
    const h2 = document.createElement("h2");
    h2.textContent = "Let's battle!";
    legend.appendChild(h2);

    // Let player decide to play CPU or human opponent
    const versusMode = document.createElement("div");
    versusMode.classList.add("form-field", "versus-mode");
    const vsH3 = document.createElement("h3");
    vsH3.textContent = "Choose your opponent:";
    versusMode.appendChild(vsH3);

    const radioDivOne = document.createElement("div");
    radioDivOne.classList.add("radio-field");
    const vsCpu = document.createElement("input");
    vsCpu.type = "radio";
    vsCpu.id = "vs-cpu";
    vsCpu.name = "versus-mode";
    vsCpu.value = "cpu";
    vsCpu.checked = "checked";

    const vsCpuLabel = document.createElement("label");
    vsCpuLabel.setAttribute("for", vsCpu.id);
    vsCpuLabel.textContent = "CPU";

    radioDivOne.appendChild(vsCpu);
    radioDivOne.appendChild(vsCpuLabel);

    const radioDivTwo = document.createElement("div");
    radioDivTwo.classList.add("radio-field");

    const vsP2 = document.createElement("input");
    vsP2.type = "radio";
    vsP2.id = "vs-p2";
    vsP2.name = "versus-mode";
    vsP2.value = "p2";

    const vsP2Label = document.createElement("label");
    vsP2Label.setAttribute("for", vsP2.id);
    vsP2Label.textContent = "Player 2";

    radioDivTwo.appendChild(vsP2);
    radioDivTwo.appendChild(vsP2Label);

    versusMode.appendChild(radioDivOne);
    versusMode.appendChild(radioDivTwo);

    legend.appendChild(versusMode);

    // Player(s) info
    const playersInfo = document.createElement("div");
    playersInfo.classList.add("form-field", "players-info");

    const p1Div = document.createElement("div");
    p1Div.classList.add("player-field");
    const p1 = document.createElement("input");
    p1.type = "text";
    p1.id = "p1";
    p1.name = "p1";

    const p1Label = document.createElement("label");
    p1Label.setAttribute("for", p1.id);
    p1Label.textContent = "Player 1's Name:";

    p1Div.appendChild(p1Label);
    p1Div.appendChild(p1);
    playersInfo.appendChild(p1Div);

    const p2Div = document.createElement("div");
    p2Div.classList.add("player-field");
    const p2 = document.createElement("input");
    p2.classList.add("hidden");
    p2.type = "text";
    p2.id = "p2";
    p2.name = "p2";

    const p2Label = document.createElement("label");
    p2Label.classList.add("hidden");
    p2Label.setAttribute("for", p2.id);
    p2Label.textContent = "Player 2's Name:";

    p2Div.appendChild(p2Label);
    p2Div.appendChild(p2);
    playersInfo.appendChild(p2Div);

    legend.appendChild(playersInfo);

    // Submit section
    const formBtns = document.createElement("div");
    formBtns.classList.add("form-field", "form-buttons");

    const startGameBtn = document.createElement("button");
    startGameBtn.classList.add("start-game-btn");
    startGameBtn.type = "submit";
    startGameBtn.textContent = "Start Game";
    formBtns.appendChild(startGameBtn);

    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("cancel-btn");
    cancelBtn.type = "reset";
    cancelBtn.textContent = "Cancel";
    formBtns.appendChild(cancelBtn);

    legend.appendChild(formBtns);

    startForm.appendChild(legend);
    controls.appendChild(startForm);
  };
  toggleNewGameBtn = () => {
    const newGameBtn = document.querySelector(".new-game-button");
    newGameBtn.classList.toggle("hidden");
  };
  toggleStartForm = () => {
    const startForm = document.querySelector(".start-form");
    startForm.classList.toggle("hidden");
  };
  showP2 = () => {
    const p2 = document.querySelector("#p2");
    const p2Label = document.querySelector("label[for='p2']");
    p2.classList.remove("hidden");
    p2Label.classList.remove("hidden");
  };
  hideP2 = () => {
    const p2 = document.querySelector("#p2");
    const p2Label = document.querySelector("label[for='p2']");
    p2.classList.add("hidden");
    p2Label.classList.add("hidden");
  };
  drawBoards = () => {
    const controls = document.querySelector(".controls");
    const boards = document.createElement("div");
    boards.classList.add("boards");
    const playerBoard = document.createElement("div");
    playerBoard.classList.add("board", "player-board");
    const oppBoard = document.createElement("div");
    oppBoard.classList.add("board", "opp-board");
    boards.appendChild(playerBoard);
    boards.appendChild(oppBoard);
    controls.appendChild(boards);
    this.drawPlayerBoard();
    this.drawOppBoard();
  };
  drawPlayerBoard = () => {
    const playerBoard = document.querySelector(".player-board");
    let row, col;
    const columns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    for (row = 0; row < 10; row++) {
      for (col = 0; col < 10; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell", `${columns[col]}${row + 1}`);
        if (
          players[0].gameboard.board[row][col] !== undefined &&
          players[0].gameboard.board[row][col] !== "n"
        ) {
          if (players[0].gameboard.board[row][col].length > 1) {
            cell.classList.add(
              `${players[0].gameboard.board[row][col].toLowerCase()}`
            );
          }
          /* 
          const cellContent = document.createElement("p");
          cellContent.textContent = players[0].gameboard.board[row][
            col
          ].substring(0, 3);
          
          cell.appendChild(cellContent);
          */
        }
        playerBoard.appendChild(cell);
      }
    }
  };
  drawOppBoard = () => {
    const oppBoard = document.querySelector(".opp-board");
    let row, col;
    const columns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    for (row = 0; row < 10; row++) {
      for (col = 0; col < 10; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell", `${columns[col]}${row + 1}`);
        oppBoard.appendChild(cell);
      }
    }
  };
}
