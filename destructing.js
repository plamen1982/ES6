var expense = {
    type: 'Business',
    amount: '$45 USD'
}

//ES5
//var type = expense.type;
//var amount = expense.amount;

//ES6

const { type, amount } = expense;

console.log(`${type}, ${amount}`)

var savedFile = {
    extension: 'jpg',
    name: 'repost',
    size: 14040
};

//ES5
function fileSummary(file) {
    return `The file ${file.name}.${file.extension} is of size ${file.size}`
}

console.log(fileSummary(savedFile));

//ES6 - destrucuring properties with {}

function fileSummaryDestructing({ extension, name, size }, {color}) {
    return `The file ${name}.${extension} is of size ${size}, color is ${color}`
}

console.log(fileSummaryDestructing(savedFile, { color: 'red' }));

const companies = [
    'Google', 
    'Facebook', 
    'Uber'
];
//ES5

const firstCompany = companies[0];
const secondCompany = companies[1];
const thirdCompany = companies[2];

console.log(firstCompany, secondCompany, thirdCompany)

//ES6 - destructuring an array with []

const [ name, name2, name3 ] = companies;

console.log(`1: ${name}, 2: ${name2}, 3: ${name3}`)

const [googleCompany, ...restCompanies] = companies;

//restCompanies is an array
console.log(restCompanies, googleCompany)

const techCompanies = [
    { name: 'Google', location: 'Mountain View' },
    { name: 'Facebook', location: 'Menlo Park' },
    { name: 'Uber', location: 'San Francisco' }
]

//two sets of destructuring
const [{ location }] = techCompanies;

console.log(location)

const Google = {
    locations: [ 'Mountain View', 'New York', 'London']
}

//two sets of destructuring
const { locations: [ googleLocation ] } = Google;
console.log(googleLocation)

//Practical use case: the order of destructing variables doesn't matter
function signup({ password, email, dateOfBirth, city, username}) {
    console.log(`create new user with username: ${username}` )
}

const user = {
    username: 'myusername',
    password: 'password',
    email: 'myemai@example.com',
    dateOfBirth: '1/1/1900',
    ciry: 'New York'
}
signup(user)

//Practical use case:
const points = [
    [4, 5],
    [10, 1],
    [0, 40]
];

const newPoints = points.map(([x, y]) => {
    return { x, y }
})

console.log(newPoints)

/**Ex: 1 Destructuring in Practice
 * The snippet of code below duplicates references to 'profile' inside of the 'isEngineer' function.  
 * Perhaps we can reduce the amount of code used for referencing the 'title' and 'department' properties.  
 * Refactor this code to use destructuring.  Can you get the body of the 'isEngineer' function down to a single line?
 */

const profile = {
    title: 'Engineer',
    department: 'Engineering'
  };
  
  function isEngineer(profile) {
    var title = profile.title;
    var department = profile.department;
    return title === 'Engineer' && department === 'Engineering';
  }
//ES6
  function isEngineerDestructuring(profile) {
    const { title, department } = profile;
    return title === 'Engineer' && department === 'Engineering';
      
  }
  console.log(isEngineerDestructuring(profile))

  /**Ex2: Array Destructuring in Practice
   * The 'classes' variable holds an array of arrays, where each array represents a single class that a student is enrolled in.
   * Convert this array of arrays into an array of objects, where each object has the keys 'subject', 'time', and 'teacher' 
   * and assign the result to 'classesAsObject.  Use array destructuring and the map helper.
   * An array for a class has the form [subject, time, teacher]
   * The resulting data structure should look something like the following:
   * const classesAsObject = [{ subject: 'Geography', time: '2PM', teacher: 'Mrs. Larsen' }]
   */

  const classes = [
    [ 'Chemistry', '9AM', 'Mr. Darnick' ],
    [ 'Physics', '10:15AM', 'Mrs. Lithun'],
    [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
  ];
  
  const classesAsObject = classes.map(([subject, time, teacher]) => {
      return { subject: subject, time: time, teacher: teacher }
    })
console.log(classesAsObject)

/**Ex3: Recursion with Destructuring
 * This one is probably the hardest exercise in the entire course!  
 * Use array destructuring, recursion, and the rest/spread operators to create a function 'double' that will return a new array
 * with all values inside of it multiplied by two.  Do not use any array helpers! Sure, the map, forEach, or reduce helpers would
 * make this extremely easy but give it a shot the hard way anyways :)
 * Input:
 * double([1,2,3])
 * Output
 * [2,4,6]
 * Hint: Don't forget that with recursion you must add a base case so you don't get an infinite call stack.  
 * For example, if 'const [ number, ...rest ] = numbers' and number is undefined do you need to keep walking through the array?
 */
  
const numbers = [1, 2, 3];

const double = ([first, ...rest]) => {
    return first === undefined ? [] : [first * 2, ...double(rest)]
}

console.log(double(numbers))