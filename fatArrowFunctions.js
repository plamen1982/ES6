//declaration with regular function

const add = function(a, b) {
    return a + b;
}

console.log(add(1, 2))

//declaration with the fat arrow

const addWithArrow = (a, b) => {
    return a + b
}

console.log(addWithArrow(1, 3))

//with single line of expression we can skip curly brackets and return keyword
const addWithoutReturn = (a, b) => a + b;

console.log(addWithoutReturn(1, 4))

//ES5

const double = function(number) {
    return number * 2;
}

console.log(double(3))
//ES6
//With single argument we can omit the parens around the argument
const doubleES6 = number => number * 2;
console.log(doubleES6(4))

const numbers = [1, 2, 3];

//ES6
const doubleArray = numbers.map( element => element * 2)

console.log(doubleArray)


const team = {
    memebers: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function() {
        return this.memebers.map(function(member) {
            //this will undefined if we do not use bind(this) 
            return `${member} is on the team ${this.teamName}`;
        }.bind(this))
    }
}

console.log(team.teamSummary());


const teamArrow = {
    memebers: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function() {
        return this.memebers.map((member) => {
            return `${member} is on the team ${this.teamName}`;
        })
    }
}

console.log(teamArrow.teamSummary());

/**Ex: 1 Refactoring Keyword Functions
 * The function below uses the 'function' keyword.  There's nothing wrong with using the 'function' 
 * keyword here, but it might look a bit nicer if we refactor it to use the fat arrow syntax instead.  
 * Refactor the code below to use a fat arrow function.  Remember the rules of fat arrow functions:
 * If the function has a single expression in its body, the curly braces and 'return' keyword can be 
 * removed. If the function has a single argument, the parentheses around the argument list can be removed
 */

const fibonacci = function(n) {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

//With Fat Arrow

const fibonacciArrow = n => {
    if( n < 3) return 1;
    return fibonacciArrow(n - 1) + fibonacciArrow(n - 2)
} 

/**Ex: 2 Arrow Functions Aren't Always a Solution
 * Arrow functions bind the value of 'this' to the surrounding context, and sometimes this 
 * isn't the behavior we expect.  The code below has an object that represents a users profile.
 * The profile has a 'name' currently.  Add another key to this object called 'getName'.  'getName'
 *  should be a function that returns the profiles name, using 'this.name'.  Does the solution work
 *  with a fat arrow function or will you have to use a function keyword instead
 */
const profile = {
    name: 'Alex',
    getName: function() {
        return this.name
    }
};