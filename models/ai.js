// written assuming numbers array of 10



var Ai = function(name, strategy){
  Player.call(this, name);
  this.strategy  = null; //will be used to set a playing style, ie aggressive
}

Ai.prototype = new Player(Ai.name);


// total points available =

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
    else {}

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
    else {}

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
    else {}

  };
  this.turnCount ++
}

Ai.prototype.calculateChoiceWeight = function(choice, opponentNumbers){

  var choiceWeight;

  for (var i = 0; i < opponentNumbers.length; i++) {
    // score 2
    if (opponentNumbers[i]+1 === choice) {choiceWeight += 2};
    // give 2
    else if (opponentNumbers[i]-1 === choice) {choiceWeight -= 2};
    // score 1
    else if (opponentNumbers[i] > choice) {choiceWeight ++};
    // give 1
    else if (opponentNumbers[i] < choice) {choiceWeight --};
    }

  return {choice: choiceWeight};
};

Ai.prototype.evaluateChoices = function(opponentNumbers){
  var choices = [];
  for (var i = 0; i < this.numbers.length; i++) {
    choices.push(this.calculateChoiceWeight(this.numbers[i], opponentNumbers)
  };
  // return choice with highest choiceWeight, if duplicate choiceWeights return array of choices
}




