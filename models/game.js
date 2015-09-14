
var Game = function(type, numRange, nameOne, nameTwo){
  if (type === "2-player") {
    this.playerOne = new Player(nameOne);
    this.playerTwo = new Player(nameTwo);
  }
  else {
    this.playerOne = new Player(nameOne);
    this.playerTwo = new Ai(nameTwo);
  }
  console.log(this);

  this.numRange = numRange;
};

Game.prototype.createPlayerNumbers = function(){
  for (var i = 1; i <= this.numRange; i++) {
    console.log(this.playerOne.numbers)
    this.playerOne.numbers.push(i);
    this.playerTwo.numbers.push(i);
  }
}

Game.prototype.compareNumbers = function(){
  if (this.playerOne.choice === this.playerTwo.choice){
    console.log("Tie")
    return "Tie";
  }
  else if( this.playerOne.choice > this.playerTwo.choice && this.playerOne.choice - this.playerTwo.choice !== 1){
    this.playerTwo.score ++;
    console.log(this.playerTwo.name+" scores 1 point.")
    return this.playerTwo.name+" scores 1 point."
  }
  else if( this.playerTwo.choice > this.playerOne.choice && this.playerTwo.choice - this.playerOne.choice !== 1){
    this.playerOne.score ++;
    console.log(this.playerOne.name+" scores 1 point.")
    return this.playerOne.name+" scores 1 point."
  }
  else if( this.playerTwo.choice > this.playerOne.choice){
    this.playerTwo.score += 2;
    console.log(this.playerTwo.name+" scores 2 point.")
    return this.playerTwo.name+" scores 2 point."
  }
  else if( this.playerOne.choice > this.playerTwo.choice){
    this.playerOne.score += 2;
    console.log(this.playerOne.name+" scores 2 point.")
    return this.playerOne.name+" scores 2 point."
  }
};


Game.prototype.updateNumbersArrays = function(player, opponent){
  var p = this[player];
  var index = p.numbers.indexOf(p.choice);
  p.numbers.splice(index, 1);
  p.moves.push(p.choice);

  var o = this[opponent]
  var index = p.opponentNumbers.indexOf(o.choice);
  p.opponentNumbers.splice(index, 1);
  p.opponentMoves.push(o.choice);
};



Game.prototype.callTurn = function(){

  if (this.playerOne.score >= 5 || this.playerTwo.score >= 5){
    console.log("1: "+this.playerOne.score, "AI: "+this.playerTwo.score )
    return true;
  }
  else {
    this.playerOne.chooseNumber();
    this.playerTwo.chooseNumber();
    this.compareNumbers();
    console.log(this.playerOne.name+" number:"+this.playerOne.choice)
    console.log(this.playerTwo.name+" number:"+this.playerTwo.choice)
    this.updateNumbersArrays('playerOne','playerTwo');
    this.updateNumbersArrays('playerTwo', 'playerOne');
    return false;
  }
};

// Game.prototype.declareWin = function(){


// };

// Game.prototype.compareNumbers = function(){

// };

// Game.prototype.compareNumbers = function(){

// };