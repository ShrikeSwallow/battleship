import Ship from "./Ship";

test("See if Ship creates instance", () => {
  expect(new Ship("Destroyer", 5)).toHaveProperty("length", 5);
});

test("Hit function should increase hits propery by 1", () => {
  const ship = new Ship("Patrol", 2);
  ship.hit();
  expect(ship.hits).toBe(1);
});

test("Check if the ship is sunk if number of hits smaller than its length", () => {
  const ship = new Ship("Patrol", 2);
  ship.hit();
  expect(ship.isSunk()).toBe(false);
});

test("Check if the ship is sunk if number of hits eqaul to its length", () => {
  const ship = new Ship("Patrol", 2);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
