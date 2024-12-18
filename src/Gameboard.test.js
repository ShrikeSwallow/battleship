import Gameboard from "./Gameboard";
import Ship from "./Ship";

//jest.mock("Ship");

test("Place a ship on a board horizontally", () => {
  const gameboard = new Gameboard();
  expect(gameboard.placeShip(gameboard.submarine, ["A", 1], "row")).toBe(true);
});

test("Place a ship on a board vertically", () => {
  const gameboard = new Gameboard();
  expect(gameboard.placeShip(gameboard.submarine, ["A", 8], "col")).toBe(true);
});

test("Try to place a ship out of bounds horizontally", () => {
  const gameboard = new Gameboard();
  expect(gameboard.placeShip(gameboard.submarine, ["I", 1], "row")).toBe(
    "Ship out of bounds!"
  );
});

test("Try to place a ship out of bounds vertically", () => {
  const gameboard = new Gameboard();
  expect(gameboard.placeShip(gameboard.submarine, ["A", 9], "col")).toBe(
    "Ship out of bounds!"
  );
});

/*test("Output the board after placing a ship horizontally", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(gameboard.submarine, ["H", 1], "row");
  expect(gameboard.board).toContain("e");
});*/

/*test("Output the board after placing a ship vertically", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(gameboard.submarine, ["A", 8], "col");
  expect(gameboard.board).toContain("e");
});*/

test("Check what happens if placed ship overlaps", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(gameboard.submarine, ["A", 6], "col");
  expect(gameboard.placeShip(gameboard.submarine, ["A", 6], "row")).toBe(
    "Can't place a ship here!"
  );
});
