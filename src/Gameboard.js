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
      let tempBoard = this.board.map((row) => row.slice());
      let i = x;

      // place ship and define safe zone above and below it
      for (i; i < x + ship.length; i++) {
        if (this.board[y][i] === undefined) {
          tempBoard[y][i] = ship.name;
          if (y - 1 >= 0) {
            tempBoard[y - 1][i] = "n";
          }
          if (y + 1 <= 9) {
            tempBoard[y + 1][i] = "n";
          }
        } else {
          return false;
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

      this.board = tempBoard.map((row) => row.slice());
      return true;
    } else {
      return false;
    }
  };
  #placeShipCol = (ship, x, y) => {
    if (ship.length + y <= 10) {
      // create a temporary board for placement operation
      // if placement completes without issues, update the main board
      let tempBoard = this.board.map((row) => row.slice());
      let i = y;

      // place ship and define safe zone to the left and right to it
      for (i; i < y + ship.length; i++) {
        if (this.board[i][x] === undefined) {
          tempBoard[i][x] = ship.name;
          if (x - 1 >= 0) {
            tempBoard[i][x - 1] = "n";
          }
          if (x + 1 <= 9) {
            tempBoard[i][x + 1] = "n";
          }
        } else {
          return false;
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
      this.board = tempBoard.map((row) => row.slice());
      return true;
    } else {
      return false;
    }
  };
  placeShip = (ship, start, orientation) => {
    const x = this.columns.indexOf(start[0]);
    const y = start[1] - 1;
    if (orientation === "col") return this.#placeShipCol(ship, x, y);
    else return this.#placeShipRow(ship, x, y);
  };

  #addSunkShip = (ship) => {
    this.sunkShips += 1;
  };

  receiveAttack = (col, row) => {
    const x = this.columns.indexOf(col);
    const y = row - 1;

    const target = this.board[y][x];
    switch (target) {
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
        let message;
        const shipName = this.board[y][x];
        this.board[y][x] = "X";
        this.ships.forEach((ship) => {
          if (ship.name === shipName) {
            ship.hit();
            message = `Hit!`;
            if (ship.isSunk()) {
              this.#addSunkShip(ship);
              message = `Hit! ${ship.name} is sunk!`;
              if (this.sunkShips === this.ships.length) {
                message = `Game over!`;
              }
            }
          }
        });
        return message;
    }
  };
}
