var Ai = function(name, strategy){
  Player.call(this, name);
  this.strategy  = null; //will be used to set a playing style, ie aggressive
}

Ai.prototype = new Player(Ai.name);

Ai.prototype.chooseNumber(){
  if (this.turnCount === 0){
    var choice = 4;
    return choice;
  }
  if (this.strategy === 'defensive'){};
  if (this.strategy === 'mild'){};
  if (this.strategy === 'aggressive'){};
}