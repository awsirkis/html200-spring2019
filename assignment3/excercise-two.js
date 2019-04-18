let n = prompt("Sentence:");
let sentence = n.split(' ');
while(!(sentence.length >= 5 && sentence[sentence.length].slice(-1) == '.')){
  n = prompt("Invalid Length: Please make sure your sentence contains five words and ends with a '.':");
  sentence = n.split(' ');

}
console.log(sentence[2]);
