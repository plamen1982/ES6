//ES5

function getMessage() {
    const year = new Date().getFullYear();

    return "The year is " + year
}

//ES6

function getMessageES6() {
    const year = new Date().getFullYear();

    return `The year is ${year}`
}

console.log(getMessage())
console.log(getMessageES6())

function doubleMessage(number) {
    return `Your number doubled is + ${ 2 * number }`;
  }

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}