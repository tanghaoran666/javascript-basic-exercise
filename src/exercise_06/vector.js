export default class Vector {
  // This class represents a 2-dimensional vector. Please implement the class according to the
  // following instructions:
  //
  // * We should be able to get the `x` part and `y` part of a vector.
  // * We should be able to calculate the plus and minus of 2 vectors.
  // * We should be able to calculate the distance of a vector.
  //
  // Your target:
  //
  // * Please implement the class and pass all the tests in vector_spec.js.
  // * Please do NOT modify the signature of the class. Please put all your code in the Vector
  // class.

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  set x(value) {
    if (this.x === undefined) {
      this._x_ = value;
    } else {
      throw new Error();
    }
  }

  set y(value) {
    if (this.y === undefined) {
      this._y_ = value;
    } else {
      throw new Error();
    }
  }

  get x() {
    return this._x_;
  }

  get y() {
    return this._y_;
  }

  static plus(vectorA, vectorB) {
    const x = vectorA.x + vectorB.x;
    const y = vectorA.y + vectorB.y;
    const vectorResult = new Vector(x, y);
    return vectorResult;
  }

  static minus(vectorA, vectorB) {
    const x = vectorA.x - vectorB.x;
    const y = vectorA.y - vectorB.y;
    const vectorResult = new Vector(x, y);
    return vectorResult;
  }

  distance() {
    return (Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
  }
}
