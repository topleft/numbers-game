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

Ai.prototype.chooseNumber = function(){

  var choice;

  // if (this.strategy === 'defensive'){
  // //defensive: never give up 2 points, get rid of high numbers
  //   if (this.turnCount === 0){
  //     choice = 10;
  //   }
  //   if (this.turnCount === 1){
  //     choice = 9;
  //   }
  //   if (this.turnCount === 2){
  //     choice = 8;
  //   }
  //   else {
  //     choice = this.evaluateChoices();
  //   }

  // };

  // if (this.strategy === 'mild'){
  // // mild: never give up 2 points, go for score at good probabilities
  //   if (this.turnCount === 0){
  //     choice = 4;
  //   }
  //   if (this.turnCount === 1){
  //     choice = 4;
  //   }
  //   if (this.turnCount === 2){
  //     choice = 4;
  //   }
  //   else {
  //     choice = this.evaluateChoices();

  //   }
  // };

  if (this.strategy === 'aggressive'){
  // aggressive: go for points, use low numbers first
    if (this.turnCount === 0){
      choice = 2;
    }
    else if (this.turnCount === 1){
      choice = 3;
    }
    else if (this.turnCount === 2){
      choice = 1;
    }
    else {
      choice = this.evaluateChoices();
    };
  }
  console.log("choice: "+choice)
  this.choice = choice;
  this.turnCount ++;
};

Ai.prototype.calculateChoiceWeight = function(choice) {

  var choiceWeight;
  console.log("num: "+ this.opponentNumbers)
  for (var i = 0; i < this.opponentNumbers.length; i++) {
    // score 2
    if (opponentNumbers[i]+1 === choice) {choiceWeight += 2;}
    // give 2
    else if (opponentNumbers[i]-1 === choice) {choiceWeight -= 3;}
    // score 1
    else if (opponentNumbers[i] > choice) {choiceWeight ++;}
    // give 1
    else if (opponentNumbers[i] < choice) {choiceWeight --;}
    }
  console.log({choice: choiceWeight});
  return {choice: choiceWeight}; // higher choiceWeight = more likely to score with that choice
};

Ai.prototype.evaluateChoices = function() {
  console.log("inside eval")
  var choices = [];
  var bestChoices = [];
  var max = 0;
  // array of {choice:choiceweights}
  for (var i = 0; i < this.numbers.length; i++) {
    choices.push(this.calculateChoiceWeight(this.numbers[i]));
  }
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].choiceWeight > max){
      max = choices[i].choiceWeight;
    }
  };
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].choiceWeight = max){
      bestChoices.push(choices[i].choice)
    }
  };
  console.log(bestChoices);
  if(bestChoices.length === 1){
    return bestChoices[0];
  }
  else {
    var num = Math.floor(Math.random()*bestChoices.length);
    return bestChoices[num];
  }


};



// Ai.prototype.evaluateOpponentStrategy = function(opponentNumbers){
//   // analyze opponents moves and apply a def., mild, or aggressive strategy
// };




// save each players move set and who won, min game is a set of 5 games
