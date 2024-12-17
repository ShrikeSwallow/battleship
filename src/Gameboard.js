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
  #placeShipRow = (ship, x, y) => {
    if (ship.length + x <= 10) {
      // TODO
      // populate given row
      const tempBoard = [...this.board];
      /*for (let i = x; i < x + ship.length; i++) {
        if (tempBoard[x] !== undefined) {
        }
      }*/
    } else {
      return "Ship out of bounds!";
    }
    return true;
  };
  #placeShipCol = (ship, x, y) => {
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
    if (orientation === "col") return this.#placeShipCol(ship, x, y);
    else return this.#placeShipRow(ship, x, y);
  };
}
