export default class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.hits = 0;
  }
  hit = () => {
    this.hits += 1;
  };
  isSunk = () => {
    if (this.hits < this.length) {
      return false;
    } else {
      return true;
    }
  };
}
