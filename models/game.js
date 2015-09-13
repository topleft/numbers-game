
var Game = function(type, numRange, nameOne, nameTwo){
  if (type === "2-player") {
    this.playerOne = new Player(nameOne);
    this.playerTwo = new Player(nameTwo);
  }
  else {
    this.playerOne = new Player(nameOne);
    this.playerTwo = new Ai(nameTwo);
  }

  this.numRange = numRange;
};

Game.prototype.createPlayerNumbers = function(){
  for (var i = 1; i <= this.numRange; i++) {
    this.playerOne.numbers.push(i);
    this.playerTwo.numbers.push(i);
}

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