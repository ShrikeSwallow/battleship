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
  #placeShipRow = (ship, start) => {
    if (ship.length + this.columns.indexOf(start[0]) <= 10) {
      // TODO
      // populate given row
      const tempBoard = [...this.board];
      for (let i = start[1]; i < start[1] + ship.length; i++) {
        if (tempBoard[start[1]] !== undefined) {
        }
      }
    } else {
      return "Ship out of bounds!";
    }
    return true;
  };
  #placeShipCol = (ship, start) => {
    if (ship.length + start[1] <= 10) {
      // TODO
      // populate given column
    } else {
      return "Ship out of bounds!";
    }
    return true;
  };
  placeShip = (ship, start, orientation) => {
    if (orientation === "col") return this.#placeShipCol(ship, start);
    else return this.#placeShipRow(ship, start);
  };
}
