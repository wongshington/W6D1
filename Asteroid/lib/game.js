const Asteroid = require("./asteroid.js");
const Bullet = require("./bullet.js");
const Ship = require("./ship.js");

const Game = function Game() {
  this.DIM_X = 1000;
  this.DIM_Y = 1000;
  this.NUM_ASTEROIDS = 25;
  this.asteroids = [];
};

Game.prototype.addAsteroids = function addAsteroids() {
  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid({ pos: this.randomPosition() }) );
  }
};

Game.prototype.randomPosition = function randomPosition() {
  const x = Math.random() * this.DIM_X;
  const y = Math.random() * this.DIM_Y;
  return [x, y];
};

Game.prototype.draw = function draw(ctx) {
  ctx.clearRect();
  this.asteroids.forEach( function(asteroid) {
    asteroid.draw(ctx);
  });
};
Game.prototype.moveObjects = function moveObjects() {
  this.asteroids.forEach( function(asteroid) {
    asteroid.move();
  });
};

module.exports = Game;
