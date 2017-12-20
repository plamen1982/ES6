//ES5 syntax

var numbers = [1, 2, 4];
var doubleNumbers = [];

for(var i = 0; i < numbers.length; i++) {
    doubleNumbers.push(numbers[i] * 2);
}

console.log(doubleNumbers)

//ES6 syntax, map helper returns new array with the modified data. return in the body of map is required

var doubled = numbers.map(function(number) {
    return number * 2;
});

console.log(doubled)

//ES6

var cars = [
    { model: 'Builk', price: 'CHEAP' },
    { model: 'Camaro', price: 'expensive' }
];

var prices = cars.map(function(car) {
    return car.price;
})

console.log(prices);

/** Plucking Values
 *Using map, create a new array that contains the 'height' property of each object.
 *Assign this new array to the variable 'heights'.  Don't forget to use the 'return' keyword in the function!
 */

var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
  ];
  
  var heights = images.map(function(image) {
      return images.height
  })

console.log(heights)

/** Calculating Values with Map
 * Using map, create a new array that contains the distance / time value from each trip.
 * In other words, the new array should contain the (distance / time) value.  
 * Assign the result to the variable 'speeds'.
 */

var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
  ];
  
  function calculateSpeed(trip) {
      return trip.distance / trip.time
  }

  var speeds = trips.map(calculateSpeed)

/** Really Hard - Implementing 'Pluck'
 * This is a hard one!
 * Implement a 'pluck' function.  Pluck should accept an array and a string representing a property name 
 * and return an  array containing that property from each object. 
 * Example: 
 *
 *var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
 *pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];
 *
 *Hint:
 *
 *Remember that you can access a property on an object by using square bracket notation. For example...
 *
 *var person = { name: 'Bill' };
 *person['name'] // returns 'Bill'
 */
var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

function pluck(array, property) {
    return newArray = paints.map(function(item) {
        return item[property]
    })
    
    return newArray
}

pluck(paints, 'color')