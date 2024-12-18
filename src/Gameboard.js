import Ship from "./Ship";

export default class Gameboard {
  constructor() {
    this.board = [[], [], [], [], [], [], [], [], [], []];
    this.carrier = new Ship("Carrier", 5);
    this.battleship = new Ship("Battleship", 4);
    this.cruiser = new Ship("Cruiser", 3);
    this.submarine = new Ship("Submarine", 3);
    this.destroyer = new Ship("Destroyer", 2);
    this.columns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  }
  #placeShipRow = (ship, x, y, board) => {
    if (ship.length + x <= 10) {
      // TODO
      // create a temporary board for placement operation
      // if placement completes without issues, update the main board
      const tempBoard = [...this.board];
      let i = x;

      // define 'safe zone' points around the ship's corners
      // j is the left edge, k is the right edge
      let j, k;
      if (x - 1 >= 0) {
        j = x - 1;
        if (y - 1 >= 0) {
          tempBoard[y - 1][j] = "n";
        }
        if (y + 1 <= 9) {
          tempBoard[y + 1][j] = "n";
        }
      }
      if (x + ship.length <= 9) {
        k = x + ship.length;
        if (y - 1 >= 0) {
          tempBoard[y - 1][k] = "n";
        }
        if (y + 1 <= 9) {
          tempBoard[y + 1][k] = "n";
        }
      }

      // place ship and define safe zone above and below it
      for (i; i < x + ship.length; i++) {
        if (tempBoard[y][i]) {
          return "Can't place a ship here!";
        } else {
          tempBoard[y][i] = "s";
          if (y - 1 >= 0) {
            tempBoard[y - 1][i] = "n";
          }
          if (y + 1 <= 9) {
            tempBoard[y + 1][i] = "n";
          }
        }
      }
      this.board = [...tempBoard];
    } else {
      return "Ship out of bounds!";
    }
    return true;
  };
  #placeShipCol = (ship, x, y, board) => {
    if (ship.length + y <= 10) {
      // TODO
      // populate given column
    } else {
      return "Ship out of bounds!";
    }
    return true;
  };
  placeShip = (ship, start, orientation) => {
    const x = this.columns.indexOf(start[0]);
    const y = start[1] - 1;
    if (orientation === "col")
      return this.#placeShipCol(ship, x, y, this.tempBoard);
    else return this.#placeShipRow(ship, x, y, this.tempBoard);
  };
}