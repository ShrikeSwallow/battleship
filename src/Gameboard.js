import Ship from "./Ship";

export default class Gameboard {
  constructor() {
    this.board = [[], [], [], [], [], [], [], [], [], []];
    /*this.carrier = new Ship("Carrier", 5);
    this.battleship = new Ship("Battleship", 4);
    this.cruiser = new Ship("Cruiser", 3);
    this.submarine = new Ship("Submarine", 3);
    this.destroyer = new Ship("Destroyer", 2);*/
    this.ships = [
      new Ship("Carrier", 5),
      new Ship("Battleship", 4),
      new Ship("Cruiser", 3),
      new Ship("Submarine", 3),
      new Ship("Destroyer", 2),
    ];
    this.columns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    this.sunkShips = 0;
  }
  #placeShipRow = (ship, x, y) => {
    if (ship.length + x <= 10) {
      // create a temporary board for placement operation
      // if placement completes without issues, update the main board
      const tempBoard = [...this.board];
      let i = x;

      // place ship and define safe zone above and below it
      for (i; i < x + ship.length; i++) {
        if (tempBoard[y][i]) {
          return "Can't place a ship here!";
        } else {
          tempBoard[y][i] = ship.name;
          if (y - 1 >= 0) {
            tempBoard[y - 1][i] = "n";
          }
          if (y + 1 <= 9) {
            tempBoard[y + 1][i] = "n";
          }
        }
      }

      // define 'safe zone' points around the ship's corners
      // j is the left edge, k is the right edge
      let j, k;
      if (x - 1 >= 0) {
        j = x - 1;
        tempBoard[y][j] = "n";
        if (y - 1 >= 0) {
          tempBoard[y - 1][j] = "n";
        }
        if (y + 1 <= 9) {
          tempBoard[y + 1][j] = "n";
        }
      }
      if (x + ship.length <= 9) {
        k = x + ship.length;
        tempBoard[y][k] = "n";
        if (y - 1 >= 0) {
          tempBoard[y - 1][k] = "n";
        }
        if (y + 1 <= 9) {
          tempBoard[y + 1][k] = "n";
        }
      }

      this.board = [...tempBoard];
    } else {
      return "Ship out of bounds!";
    }
    return true;
  };
  #placeShipCol = (ship, x, y) => {
    if (ship.length + y <= 10) {
      // create a temporary board for placement operation
      // if placement completes without issues, update the main board
      const tempBoard = [...this.board];
      let i = y;

      // place ship and define safe zone to the left and right to it
      for (i; i < y + ship.length; i++) {
        if (tempBoard[i][x]) {
          return "Can't place a ship here!";
        } else {
          tempBoard[i][x] = ship.name;
          if (x - 1 >= 0) {
            tempBoard[i][x - 1] = "n";
          }
          if (x + 1 <= 9) {
            tempBoard[i][x + 1] = "n";
          }
        }
      }

      // define 'safe zone' points around the ship's corners
      // j is the left edge, k is the right edge
      let j, k;
      if (y - 1 >= 0) {
        j = y - 1;
        tempBoard[j][x] = "n";
        if (x - 1 >= 0) {
          tempBoard[j][x - 1] = "n";
        }
        if (x + 1 <= 9) {
          tempBoard[j][x + 1] = "n";
        }
      }
      if (y + ship.length <= 9) {
        k = y + ship.length;
        tempBoard[k][x] = "n";
        if (x - 1 >= 0) {
          tempBoard[k][x - 1] = "n";
        }
        if (x + 1 <= 9) {
          tempBoard[k][x + 1] = "n";
        }
      }
      this.board = [...tempBoard];
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

  #addSunkShip = (ship) => {
    this.sunkShips += 1;
    return `${ship.name} has been sunk.`;
  };

  receiveAttack = (col, row) => {
    const x = this.columns.indexOf(col);
    const y = row - 1;

    const target = this.board[y][x];
    switch (target) {
      /*
      case "Carrier":
        this.board[y][x] = "X";
        this.carrier.hit();
        if (this.carrier.isSunk()) this.#addSunkShip(this.carrier);
        return "Hit!";

      case "Battleship":
        this.board[y][x] = "X";
        this.battleship.hit();
        if (this.battleship.isSunk()) this.#addSunkShip(this.battleship);
        return "Hit!";

      case "Cruiser":
        this.board[y][x] = "X";
        this.cruiser.hit();
        if (this.cruiser.isSunk()) this.#addSunkShip(this.cruiser);
        return "Hit!";

      case "Submarine":
        this.board[y][x] = "X";
        this.submarine.hit();
        if (this.submarine.isSunk()) this.#addSunkShip(this.submarine);
        return "Hit!";

      case "Destroyer":
        this.board[y][x] = "X";
        this.destroyer.hit();
        if (this.destroyer.isSunk()) this.#addSunkShip(this.destroyer);
        return "Hit!";
        */
      case "x":
        return "Try again!";

      case "X":
        return "Try again!";

      case undefined:
        this.board[y][x] = "x";
        return "Miss!";

      case "n":
        this.board[y][x] = "x";
        return "Miss!";

      default:
        const shipName = this.board[y][x];
        this.ships.forEach((ship) => {
          if (ship.name === shipName) {
            this.board[y][x] = "X";
            ship.hit();
            if (ship.isSunk()) this.#addSunkShip(ship);
          }
        });
        return "Hit!";
    }
  };
}
