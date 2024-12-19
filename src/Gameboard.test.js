import Gameboard from "./Gameboard";
import Ship from "./Ship";

//jest.mock("Ship");

const gameboard = new Gameboard();

test("Place a ship on a board horizontally", () => {
  //const gameboard = new Gameboard();
  expect(gameboard.placeShip(gameboard.ships[3], ["A", 1], "row")).toBe(true);
});

test("Place a ship on a board vertically", () => {
  //const gameboard = new Gameboard();
  expect(gameboard.placeShip(gameboard.ships[3], ["A", 8], "col")).toBe(true);
});

test("Try to place a ship out of bounds horizontally", () => {
  //const gameboard = new Gameboard();
  expect(gameboard.placeShip(gameboard.ships[3], ["J", 1], "row")).toBe(
    "Ship out of bounds!"
  );
});

test("Try to place a ship out of bounds vertically", () => {
  //const gameboard = new Gameboard();
  expect(gameboard.placeShip(gameboard.ships[3], ["A", 10], "col")).toBe(
    "Ship out of bounds!"
  );
});

/*test("Output the board after placing a ship horizontally", () => {
  //const gameboard = new Gameboard();
  gameboard.placeShip(gameboard.submarine, ["H", 1], "row");
  expect(gameboard.board).toContain("e");
});*/

/*test("Output the board after placing a ship vertically", () => {
  //const gameboard = new Gameboard();
  gameboard.placeShip(gameboard.submarine, ["A", 8], "col");
  expect(gameboard.board).toContain("e");
});*/

test("Check what happens if placed ship overlaps", () => {
  //const gameboard = new Gameboard();
  gameboard.placeShip(gameboard.ships[3], ["A", 6], "col");
  expect(gameboard.placeShip(gameboard.ships[3], ["A", 6], "row")).toBe(
    "Can't place a ship here!"
  );
});

test("Function receiveAttack 'misses'.", () => {
  expect(gameboard.receiveAttack("B", 2)).toBe("Miss!");
});

test("Function receiveAttack 'hits'.", () => {
  expect(gameboard.receiveAttack("A", 1)).toBe("Hit!");
});

test("Function receiveAttack 'hits' already targeted spot.", () => {
  expect(gameboard.receiveAttack("A", 1)).toBe("Try again!");
});

test("Sunk the last ship", () => {
  gameboard.sunkShips = 4;
  gameboard.placeShip(gameboard.ships[4], ["E", 1], "row");
  gameboard.receiveAttack("E", 1);

  expect(gameboard.receiveAttack("F", 1)).toBe(`Hit!
    Destroyer is sunk!
    Game over!`);

  //gameboard.receiveAttack("F", 1);
  //expect(gameboard.sunkShips).toBe(5);
});

/*test("Display gameboard", () => {
  expect(gameboard.board).toBe("Try again!");
});*/
