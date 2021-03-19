var myArr = [2, 4, 0, 8, 10];
function myArrayFunction(arr) {
  var myItems = [...arr];
  myItems[3] = 6;
  myItems;
}
console.log(myArrayFunction(arr));
module.exports = myArrayFunction;
