// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');

  var game = new Game("ai", 10, "Pete", "AI", [1,2,3,4,5,6,7,8,9,10]);

  game.createPlayerNumbers()
  game.callTurn();
});
