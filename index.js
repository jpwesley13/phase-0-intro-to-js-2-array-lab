// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop(cats);
}
function destructivelyRemoveFirstCat() {
    cats.shift(cats);
}
function appendCat(name) {

const appendCat = [...cats, name];
return appendCat
}
function prependCat(name) {
    const prependCat = [name, ...cats]
    return prependCat
}
function removeLastCat() {
   const removeLastCat = cats.slice(0, 2);
    return removeLastCat
}
function removeFirstCat() {
    return cats.slice(1)
}