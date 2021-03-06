const MovingObject = function MovingObject(argObj) {
 this.pos = argObj["pos"];
 this.vel = argObj["vel"];
 this.radius = argObj["radius"];
 this.color = argObj["color"];
};

MovingObject.prototype.draw = function draw(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};

MovingObject.prototype.move = function move() {
  this.pos[0] +=this.vel[0];
  this.pos[1] +=this.vel[1];
};

module.exports = MovingObject;
