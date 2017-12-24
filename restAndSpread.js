function addNumbers(numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

console.log(addNumbers([1, 2, 3, 4, 5]));

//when we do not know the exact number of the arguments, "..."(rest operator) gather all arguments
// in an array in this case with the name of numbers

function addNumbersWithRest(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

console.log(addNumbersWithRest(1, 2, 3, 4, 5));


const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];

//we would like to join the two arrays in one, one way is to use concat method

const allColors = defaultColors.concat(userFavoriteColors);
console.log(allColors)

// spread operator;

const fallColors = ['fire red', 'fall orange'];
console.log(['green', 'blue', ...defaultColors, ...userFavoriteColors, ...fallColors ]);

function validateShoppingList(...items) {
    if(items.indexOf('mild') < 0) {
        return [ 'milk', ...items]
    }

    return items;
}

console.log(validateShoppingList('oranges', 'bread', 'eggs'))

//Practical use case: We would like to change the name of calculateProduct to multiply, but the 
//method calculateProduct is heavely used in our project

const MathLibrary = {
    calculateProduct(a, b) {
        return a * b
    }
}

//solution

const MathLibraryRefactored = {
    calculateProduct(...rest) {
        console.log('Use multiply instead')
        return this.multiply(...rest)
    },
    multiply(a, b) {
        return a * b
    }
}

/**Ex1: Many, Many Arguments
 * Refactor the following function to use the rest operator.  
 * Remember, an argument using the rest operator does *not* need to be called 'rest'.
 */

function product(a, b, c, d, e) {
    var numbers = [a,b,c,d,e];
    
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
  }

function productRest(...numbers) {
    return numbers.reduce((acc, number) =>  acc * number , 1)
}

/**Ex2: Spreadin' Arrays
 * Refactor the following to use the spread operator.
 */

function join(array1, array2) {
    return array1.concat(array2);
  }


  function joinSpred(array1, array2) {
      return [...array1, ...array2]
  }

  /**Ex3: Mixing Rest and Spread
   * Refactor the following to use the only the rest operator
   */

  function unshift(array, a, b, c, d, e) {
    return [a, b, c, d, e].concat(array);
  }

  function unshiftMix(array, ...array2) {
    return [...array2, array2]
  }