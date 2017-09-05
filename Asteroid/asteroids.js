const GameView = require("./lib/game_view.js");
document.addEventListener("DOMContentLoaded", function(){
  const gameCanvas = document.getElementById("game-canvas");
  const ctx = gameCanvas.getContext("2d");
  const viewGame = new GameView(ctx);
  gameCanvas.width = viewGame.game.DIM_X;
  gameCanvas.height = viewGame.game.DIM_Y;
  viewGame.start();

});
