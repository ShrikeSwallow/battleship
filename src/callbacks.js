import { display, players } from "./index.js";
import Player from "./Player.js";

export const prepNewGame = () => {
  display.toggleNewGameBtn();
  display.toggleStartForm();
  const boards = document.querySelector(".boards");
  boards.innerHTML = "";
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

const getCoordinates = (event) => {
  const col = event.target.id.substring(3, 4);
  const row = Number.parseInt(event.target.id.substring(4, 6));
  console.log(col);
  console.log(row);
  return [col, row];
};

const cpuTurn = () => {
  let coordinates = [];
  let message;
  const columns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  coordinates.push(columns[Math.floor(Math.random() * 10)]);
  coordinates.push(Math.floor(Math.random() * 10) + 1);
  console.log(`[${coordinates[0]}, ${coordinates[1]}]`);
  message = players[0].gameboard.receiveAttack(coordinates[0], coordinates[1]);
  display.updateCell(`p1-${coordinates[0]}${coordinates[1]}`, message);
  return message;
};

export const playGame = () => {
  let coordinates = [];
  let message;
  const boards = document.querySelector(".opp-board");
  boards.addEventListener(
    "click",
    (event) => {
      if (event.target.className.includes("cell")) {
        coordinates = getCoordinates(event);
        console.log({ coordinates });
        message = players[1].gameboard.receiveAttack(
          coordinates[0],
          coordinates[1]
        );
        console.log(`Your Turn: ${message}`);
        display.updateCell(event.target.id, message);
        if (message === "Game over!") {
          display.toggleNewGameBtn();
          return alert(`${message}. You won!`);
        } else {
          do {
            message = cpuTurn();
            console.log(`CPU Turn: ${message}`);
          } while (message === "Try again!");
        }

        if (message === "Game over!") {
          display.toggleNewGameBtn();
          return alert(`${message}. CPU won!`);
        } else playGame();
      }
    },
    { once: true }
  );
};

export const startGame = (event) => {
  event.preventDefault();
  const p1 = document.querySelector("#p1");
  const p2 = document.querySelector("input[name='versus-mode']:checked");
  const playerOne = new Player(p1.value, "p1");
  const playerTwo = new Player(p2.value, "p2");
  players.push(playerOne);
  players.push(playerTwo);
  const startForm = document.querySelector(".start-form");
  //startForm.reset();
  display.toggleStartForm();
  fillPlayerOneBoard();
  fillPlayerTwoBoard();
  display.drawBoards();
  console.log(players);
  playGame();
};

const fillPlayerOneBoard = () => {
  players[0].gameboard.placeShip(
    players[0].gameboard.ships[0],
    ["A", 1],
    "row"
  );
  players[0].gameboard.placeShip(
    players[0].gameboard.ships[1],
    ["C", 3],
    "row"
  );
  players[0].gameboard.placeShip(
    players[0].gameboard.ships[2],
    ["H", 8],
    "col"
  );
  players[0].gameboard.placeShip(
    players[0].gameboard.ships[3],
    ["F", 5],
    "row"
  );
  players[0].gameboard.placeShip(
    players[0].gameboard.ships[4],
    ["B", 9],
    "row"
  );
};

const fillPlayerTwoBoard = () => {
  players[1].gameboard.placeShip(
    players[1].gameboard.ships[0],
    ["A", 1],
    "row"
  );
  players[1].gameboard.placeShip(
    players[1].gameboard.ships[1],
    ["C", 3],
    "row"
  );
  players[1].gameboard.placeShip(
    players[1].gameboard.ships[2],
    ["H", 8],
    "col"
  );
  players[1].gameboard.placeShip(
    players[1].gameboard.ships[3],
    ["F", 5],
    "row"
  );
  players[1].gameboard.placeShip(
    players[1].gameboard.ships[4],
    ["B", 9],
    "row"
  );
};
