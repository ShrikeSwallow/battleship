import Gameboard from "./Gameboard";
import Ship from "./Ship";

//jest.mock("Ship");

test("Place a ship on a board horizontally", () => {
  const gameboard = new Gameboard();
  expect(gameboard.placeShip(gameboard.submarine, ["H", 0], "row")).toBe(true);
});

test("Place a ship on a board vertically", () => {
  const gameboard = new Gameboard();
  expect(gameboard.placeShip(gameboard.submarine, ["A", 8], "col")).toBe(true);
});

test("Try to place a ship out of bounds horizontally", () => {
  const gameboard = new Gameboard();
  expect(gameboard.placeShip(gameboard.submarine, ["I", 0], "row")).toBe(
    "Ship out of bounds!"
  );
});

test("Try to place a ship out of bounds vertically", () => {
  const gameboard = new Gameboard();
  expect(gameboard.placeShip(gameboard.submarine, ["A", 9], "col")).toBe(
    "Ship out of bounds!"
  );
});
