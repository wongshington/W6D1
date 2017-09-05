const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");


const Asteroid = function Asteroid(pos) {
  this.COLOR = "grey";
  this.RADIUS = 8;
  this.vel = Util.randomVec(10);
  const optionsHash = {color: this.COLOR,
                       radius: this.RADIUS,
                       vel: this.vel,
                       pos: pos};
  // NOTE: THIS MIGHT BE GARBAGE
  new MovingObject(optionsHash);
};

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
