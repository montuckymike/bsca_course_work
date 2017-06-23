
function generateDeck(){
    var tempDeck = [];
    for (var i=1; i<=52; i++){
      tempDeck.push(i);
  }
      return tempDeck;
}

var deck = generateDeck();
//console.log("My deck is: ",deck);

function shuffle (deckIn){
    for (var j=0;j<deckIn.length;j++){
      var currentIndex = deckIn.indexOf(deckIn[j]);
      var swapIndex = deckIn.indexOf(deckIn[Math.floor(Math.random()* deckIn.length)]);

      var tempCard = deckIn[currentIndex];
      deckIn[currentIndex] = deckIn[swapIndex];
      deckIn[swapIndex] = tempCard;
    }
    console.log("Shuffled Deck length: ",deckIn.length);
    return deckIn;
}

deck = shuffle(deck);

var checkArray = [];
deck.forEach(function (card, index){
  if (deck.indexOf(card)=== index){
    checkArray.push(card);
  }
});
console.log("Check array length: ", checkArray.length);
