import Ship from "./Ship";

export default class Gameboard {
  constructor() {
    this.board = [[], [], [], [], [], [], [], [], [], []];
    this.tempBoard = [...this.board];
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
      // populate given row
      let i = x;
      for (i; i < x + ship.length; i++) {
        if (this.board[y][i]) {
          return "Can't place a ship here!";
        } else {
          this.board[y][i] = "s";
        }
      }
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
