let cards = [["Spades", "Clubs", "Hearts", "Diamonds"], ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"]];
for(i = 0; i < cards[0].length; i++){
  for(j = 0; j < cards[1].length; j++){
    console.log(cards[1][j] + " of " + cards[0][i]);
  }
}
