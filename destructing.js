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

