var myPetsArray = ["Dog", "cat"];

function myArrayFunction(myPets) {
  var myNewPets = [...myPets];
  myNewPets.push("Bird", "Fish");
  myNewPets.shift(firstPet);
  myNewPets.pop(lastPet);
  myNewPets.unshift("Lion");
}
console.log(myArrayFunction());
module.exports = myArrayFunction;
