var Player = function(name, arr){
  this.preDefMoves = arr || null;
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
  return move;
};

