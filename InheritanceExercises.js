// Function.prototype.inherits = function inherits(parent) {
//   function Surrogate() {}
//   Surrogate.prototype = parent.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };

Function.prototype.inherits = function inherits(parent) {
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
};

function MovingObject () {
}
MovingObject.prototype.testFunct = function testFunct() {
  console.log("TESTFUNCT!");
};

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {
  this.otherTestFunct = function() {
    console.log("OTHERTEST!");
  };
}
Asteroid.inherits(MovingObject);

const a = new Asteroid();
const s = new Ship();
