// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');

  var game = new Game("ai", 10, "Pete", "AI");

  game.createPlayerNumbers();
  while(!game.callTurn()){
    game.callTurn();
  };
});
