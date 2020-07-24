/*
* Link to the question:
* https://stackoverflow.com/questions/62242680/how-to-insert-a-object-in-an-array-as-a-element/62243278#62243278
* */

function firstApproach() {
  class Vector {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }

  const coordinatesStorage = [];

  coordinatesStorage.push(new Vector(1, 2));
  coordinatesStorage.push(new Vector(3, 4));
  coordinatesStorage.push(new Vector(4, 6));

  console.log(coordinatesStorage);
}

function secondApproach() {
  const coordinate2 = {
    x: 2,
    y: 4
  };

  const coordinatesStorage2 = [];

  coordinatesStorage2.push(coordinate2);
  coordinatesStorage2.push(coordinate2);
  console.log(coordinatesStorage2);
}

function thirdApproach() {
  const coordinate1 = [1, 2];
  const coordinate2 = [3, 4];
  const coordinatesStorage = [];
  coordinatesStorage.push(coordinate1);
  coordinatesStorage.push(coordinate2);
  console.log(coordinatesStorage);
}
