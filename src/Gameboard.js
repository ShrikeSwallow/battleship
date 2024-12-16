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
  #placeShipH = (ship, start) => {
    if (ship.length + start[1] < 10) {
      // TODO
      // populate given row
    } else {
      return "Ship out of bounds!";
    }
    return true;
  };
  #placeShipV = (ship, start) => {
    if (ship.length + this.columns.indexOf(start[0]) < 10) {
      // TODO
      // populate given column
    } else {
      return "Ship out of bounds!";
    }
    return true;
  };

  placeShip = (ship, start, orientation) => {
    if (orientation === "v") return this.#placeShipV(ship, start);
    else return this.#placeShipH(ship, start);
  };
}
