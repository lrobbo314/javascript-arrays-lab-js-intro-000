const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

// function kittens(v) {
//   var kittens = ["Milo", "Otis", "Garfield"];
//   return kittens;
// }

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.shift(name);
}
