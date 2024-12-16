import Gameboard from "./Gameboard";
import Ship from "./Ship";

//jest.mock("Ship");

test("Place a ship on a board", () => {
  const gameboard = new Gameboard();
  expect(gameboard.placeShip(gameboard.destroyer, ["A", 7], "h")).toBe(true);
});

test("Try to place a ship out of bounds", () => {
  const gameboard = new Gameboard();
  expect(gameboard.placeShip(gameboard.destroyer, ["J", 0], "v")).toBe(
    "Ship out of bounds!"
  );
});
