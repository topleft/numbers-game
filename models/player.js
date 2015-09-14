

var Player = function(name){
  this.preDefMoves = [1,2,3,4,5,6,7,8,9,10];
  this.name = name;
  this.choice = null;
  this.moves = [];
  this.numbers = [];
  this.opponentNumbers = [];
  this.opponentMoves = [];
  this.score = 0;
  this.turnCount = 0;// used to determine how many turns have been taken

}

Player.prototype.chooseNumber = function(){
  var move = this.preDefMoves[this.turnCount];
  this.turnCount ++;
  console.log(move);
  this.choice = move;
};

