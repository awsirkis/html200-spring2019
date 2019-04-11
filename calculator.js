var x = 42
var y = "42"
var z = false
var w = true
vars = [42, "42", false, true]
for(let i = 0; i < vars.length; i++){
  for(let j = 1; j < vars.length; j++){
    console.log(vars[i]*vars[j]);
  }
}
