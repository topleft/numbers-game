// written assuming numbers array of 10



var Ai = function(name){
  Player.call(this, name);
  this.strategy  = "aggressive"; //will be used to set a playing style, ie aggressive
  this.opponentMoves = []; // indoex 0 will be first move
}

Ai.prototype = new Player(Ai.name);


Ai.prototype.updateOpponentMoves= function(move){
  this.opponentMoves.push(move);
}

// might need an discoverOppMove if we only have access to a resulting array

Ai.prototype.chooseNumber = function(opponentNumbers){

  var choice;

  if (this.strategy === 'defensive'){
  //defensive: never give up 2 points, get rid of high numbers
    if (this.turnCount === 0){
      choice = 10;
      return choice;
    }
    if (this.turnCount === 1){
      choice = 9;
      return choice;
    }
    if (this.turnCount === 2){
      choice = 8;
      return choice;
    }
    else {
      return evaluateChoices();
    }

  };

  if (this.strategy === 'mild'){
  // mild: never give up 2 points, go for score at good probabilities
    if (this.turnCount === 0){
      choice = 4;
      return choice;
    }
    if (this.turnCount === 1){
      choice = 4;
      return choice;
    }
    if (this.turnCount === 2){
      choice = 4;
      return choice;
    }
    else {
      return evaluateChoices();

    }
  };

  if (this.strategy === 'aggressive'){
  // aggressive: go for points, use low numbers first
    if (this.turnCount === 0){
      choice = 3;
      return choice;
    }
    if (this.turnCount === 1){
      choice = 1;
      return choice;
    }
    if (this.turnCount === 2){
      choice = 2;
      return choice;
    }
    else {
      return evaluateChoices();
    };
  }
  this.turnCount ++;
};

Ai.prototype.calculateChoiceWeight = function(choice) {

  var choiceWeight;

  for (var i = 0; i < this.opponentNumbers.length; i++) {
    // score 2
    if (opponentNumbers[i]+1 === choice) {choiceWeight += 2}
    // give 2
    else if (opponentNumbers[i]-1 === choice) {choiceWeight -= 3}
    // score 1
    else if (opponentNumbers[i] > choice) {choiceWeight ++}
    // give 1
    else if (opponentNumbers[i] < choice) {choiceWeight --}
    }

  return {choice: choiceWeight}; // higher choiceWeight = more likely to score with that choice
};

Ai.prototype.evaluateChoices = function() {
  var choices = [];
  var bestChoices = [];
  var max = 0;

  for (var i = 0; i < this.numbers.length; i++) {
    choices.push(this.calculateChoiceWeight(this.numbers[i], this.opponentNumbers));
  }
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].choiceWeight > max){
      max = choices[i].choiceWeight;
  };
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].choiceWeight = max){
      bestChoices.push(choices[i].choice)
      }
  };
  if(bestChoices.length === 1){
    return bestChoices[0];
  }
  else {
    var num = Math.floor(Math.random()*bestChoices.length);
    return bestChoices[num];
  }
};


};



// Ai.prototype.evaluateOpponentStrategy = function(opponentNumbers){
//   // analyze opponents moves and apply a def., mild, or aggressive strategy
// };




// save each players move set and who won, min game is a set of 5 games
