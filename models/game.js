
var Game = function(type, nameOne, nameTwo){
  if (type === "2-player") {
    this.playerOne = new Player(nameOne);
    this.playerTwo = new Player(nameTwo);
  }
  else {
    this.playerOne = new Player(nameOne);
    this.playerTwo = new Ai(nameTwo);
  }
};

Game.prototype.compareNumbers = function(){

};

Game.prototype.updateScore = function(){

};

Game.prototype.nextTurn = function(){

};

Game.prototype.declareWin = function(){

};

Game.prototype.compareNumbers = function(){

};

Game.prototype.compareNumbers = function(){

};