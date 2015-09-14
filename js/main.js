// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');

  var game = new Game("ai", 10, "Pete", "AI");
  var count = 0;

  game.createPlayerNumbers();
  while(!game.callTurn() || count< 15){
    count ++;
    console.log(count)
    game.callTurn();
  };
});
