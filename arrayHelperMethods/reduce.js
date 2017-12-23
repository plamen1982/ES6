var numbers = [10, 20, 30];
var sum = 0;

//ES5
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}

//ES6 - reduce,the second argument after the iterator function is the initail value for sum
numbers.reduce(function(sum, number){
    return sum + number;
}, 0);

//ES6
var primaryColors = [
    { color: 'red'},
    { color: 'yellow'},
    { color: 'blue'}
];

primaryColors.reduce(function(accumulator, primaryColor){
    accumulator.push(primaryColor.color)

    return accumulator;
}, []);

//ES6 - Task: Check if the parens of string is balanced

function balancedParens(string){
    return !string
           .split("")
           .reduce(function(counter, char){
               //do not do anything with counter if is starting with ')' => unbalanced string
               if(counter < 0) { return counter }
               else if( counter === '(') { return ++counter }
               else if( counter === ')') { return --counter }
                //if there is a different charachter that '(' or ')' do not do anything
               return counter;
           }, 0);
}

/**Ex1: Distance Traveled
 * Use the 'reduce' helper to find the sum of all the distances traveled.
 * Assign the result to the variable 'totalDistance'
 */

 var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

 var totalDistance = trips.reduce(function(countDistance, trip) {
     return countDistance + trip.distance
 }, 0)

 console.log(totalDistance)

 /**Ex2: Reducing Properties
  * Use the 'reduce' helper to create an object that tallies the 
  * number of sitting and standing desks.  The object returned should
  * have the form '{ sitting: 3, standing: 2 }'.  The initial value has 
  * been provided to you.
  * Hint: Don't forget to return the accumulator object (the first argument to
  * the iterator function)
  */

  var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
  ];
  
  var deskTypes = desks.reduce(function(places, desk) {
      if(desk.type === 'sitting') { places.sitting += 1 }
      else if(desk.type === 'standing') { places.standing += 1 }

      return places
  }, { sitting: 0, standing: 0 });

  /**Ex3: Hardmode: Custom 'Unique Helper'
   * Another really hard one!  Write a function called 'unique' that will remove all the 
   * duplicate values from an array.For example, given the following array:
   * var numbers = [1, 1, 2, 3, 4, 4];
   * Your function should return
   * [1, 2, 3, 4]
   * Hint: Use the 'reduce' and 'find' helpers.  
   */

var numbers = [1, 1, 2, 3, 4]
function unique(array) {
    return array.reduce(function(uniqueArray, currentElement){
        if(uniqueArray.length === 0) {
            uniqueArray.push(currentElement)
        }
        var isCurrValueExist = uniqueArray.find(function(uniqueCurrentElement){
            return uniqueCurrentElement === currentElement
        })

        if(!isCurrValueExist) {
            uniqueArray.push(currentElement)
        }

        return uniqueArray

    }, [])
}

var uniqueArray = unique(numbers)

console.log(uniqueArray)

// Second solution.  Using the array helper includes

function unique2(array) {
    return array.reduce(function(uniqueArray, currentElement) {
        if(uniqueArray.length === 0) {
            uniqueArray.push(currentElement)
        }
        var isCurrValueExist = uniqueArray.includes(currentElement)
        if(!isCurrValueExist) {
            uniqueArray.push(currentElement)
        }
        return uniqueArray
    }, [])
}

var uniqueArray2 = unique2(numbers)
console.log(uniqueArray2)