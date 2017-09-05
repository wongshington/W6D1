/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const GameView = __webpack_require__(2);
document.addEventListener("DOMContentLoaded", function(){
  const gameCanvas = document.getElementById("game-canvas");
  const ctx = gameCanvas.getContext("2d");
  const viewGame = new GameView(ctx);
  gameCanvas.width = viewGame.game.DIM_X;
  gameCanvas.height = viewGame.game.DIM_Y;
  viewGame.start();

});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__(3);

const GameView = function GameView(ctx) {
  this.game = new Game();
  this.ctx = ctx;
};

GameView.prototype.start = function start() {
  setInterval(() => {
    this.game.moveObjects();
    this.game.draw();
  }, 20);
};

module.exports = GameView;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const Asteroid = __webpack_require__(4);
const Bullet = __webpack_require__(6);
const Ship = __webpack_require__(7);

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


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(0);
const Util = __webpack_require__(5);


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


/***/ }),
/* 5 */
/***/ (function(module, exports) {

const Util = {
    inherits (childClass, parentClass) {
      childClass.prototype = Object.create(parentClass.prototype);
      childClass.prototype.constructor = childClass;
    },
    randomVec (length) {
  const deg = 2 * Math.PI * Math.random();
  return Util.scale([Math.sin(deg), Math.cos(deg)], length);
},

scale (vec, m) {
  return [vec[0] * m, vec[1] * m];
}
};

module.exports = Util;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(0);

const Bullet = function Bullet() {};

module.exports = Bullet;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(0);

const Ship = function Ship() {};


module.exports = Ship;


/***/ })
/******/ ]);