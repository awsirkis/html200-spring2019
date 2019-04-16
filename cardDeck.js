var suits = ['H', 'C', 'S', 'D'];
var faces = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
for(int j = 0; j < faces.length; j++) {
    for(int i = 0; i < suits.length; i++){
      console.log(faces[j] + " " + suits[i]);
    }
}
