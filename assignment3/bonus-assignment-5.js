let cards = [["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"],["Spades", "Clubs", "Hearts", "Diamonds"]];
for(i = 0; i < cards[1].length; i++){
  for(j = 0; j < cards[0].length; j++){
    console.log(cards[0][j] + " of " + cards[1][i]);
  }
}
