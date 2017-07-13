// ------------------------
// FILTER AND MAP RESOURCES
// ------------------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


// ------------------------
// MAP EXAMPLES
// ------------------------
var numbers = [1,2,3,4,5,6,7,8,9];


                // ONE
                // Use a for loop to return an array of odd numbers

// var newArr = [];
// for (var i = 0; i < numbers.length; i++) {
//   if (numbers[i] %2 !==0){
//   newArr.push(numbers[i])
//   }
// }
// console.log(newArr);


              // Use map to return an array of odd numbers

// var mappedOddNumbers = numbers.map(function (item){
//   return item * 2
// });
//
// console.log(mappedOddNumbers);

              // use a for loop to return an array full of objects:
              // ex: var numberObjects = [ { count: 1 }, { count: 2 } ];

// var oddNumObjects = [];
//
// for (var i=0; i < numbers.length; i++){
//   oddNumObjects.push({ count: numbers[i] })
// };
//
// console.log(oddNumObjects);




// var mappedOddNumbers = numbers.map(function(item){
//   return { count: item }
// });
//
// console.log(mappedOddNumbers);

// ------------------------
// FILTER EXAMPLES
// ------------------------

// ONE

// Use a for loop to return an arry of numbers less than 4
// Use Filter to achieve the same goal.

                  // Use map to return an array of odd numbers


// var numsLessThanFour = [];
// for (var i = 0; i < numbers.length; i++) {
//   if (numbers[i] < 4){
//   numsLessThanFour.push(numbers[i])
//   }
// }
//
// console.log(numsLessThanFour);

//
// var numsLessThanFour = numbers.filter(function(item){
//   return item < 4
// });
//
// console.log(numsLessThanFour);


              //use filter to return array of even numbers
//
// var evenNums = numbers.filter(function(item){
//   return item % 2 === 0
// });
//
// console.log(evenNums);


              // use map and filter together to return number objects greater than 5;

// var numsGreaterThanFive = numbers.filter(function(item){
//   return item > 5;
// }).map(function (item){
//   return {object: item};
// })
//
// console.log(numsGreaterThanFive);


// ------------------------
// ADDITIONAL EXAMPLES
// ------------------------

var names = ["David Bowie", "John Lennon", "Jimi Hendirx", "Paul McCartney", "Kurt Cobain"];

// map the names to objects

var mappedNames = names.map(function(item){
  return {object: item};
});

console.log("Obejct Names",mappedNames);

// map just the first names
var firstName = names.map(function(item){
  return item.split(' ').slice(0, -1).join(' ');
})

console.log("First names only",firstName);


// filter to return names that begin with J

var namesBeginWithJ = names.filter(function(item){
  return item.startsWith("J");
})

console.log("Names start with J",namesBeginWithJ);

// use map and filter together to return first names that begin with J.

var nameObjectsBeginWithJ = names.filter(function(item){
  return item.startsWith("J");
}).map(function(item){
  return {object: item.split(' ').slice(0, -1).join(' ')};
})

console.log("First Name objects that start with J",nameObjectsBeginWithJ);



var shapes = [
  { name: "Square", color: "Green", sides: 4 },
  { name: "Triangle", color: "Green", sides: 3 },
  { name: "Rectangle", color: "Red", sides: 4 },
  { name: "Pentagon", color: "Green", sides: 5 },
  { name: "Right Triangle", color: "Red", sides: 3 },
];

// return an array of just shape names

var shapeNames = shapes.map(function(item){
  return item.name
})
console.log("Just shape names",shapeNames);

// return an array of Green shapes

var greenShapesOnly = shapes.filter(function(item){
  return item.color === "Green"
})
console.log("Green Shapes Only",greenShapesOnly);

// return just Names of Green shapes
var greenShapesOnly = shapes.filter(function(item){
  return item.color === "Green"
}).map(function(item){
  return item.name
});
console.log("Green Shape NAMES Only",greenShapesOnly);


// return an array of shapes with less then 4 sides

var shapesLessThanFourSides = shapes.filter(function(item){
  return item.sides < 4;
})

console.log("Shapes with less then 4 sides",shapesLessThanFourSides);

// return an array of shapes with less then 4 sides NAMES ONLY

var shapesLessThanFourSides = shapes.filter(function(item){
  return item.sides < 4;
}).map(function(item){
  return item.name
});

console.log("Shape NAMES with less then 4 sides",shapesLessThanFourSides);
