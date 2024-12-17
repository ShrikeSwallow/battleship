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

test("Output the board after placing a ship", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(gameboard.submarine, ["F", 1], "row");
  expect(gameboard.board[0]).toContain("e");
});
