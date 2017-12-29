//1. What is a generator - is a function that can be entered and exit multiple times. Normally function can
//run once and that's it. With generator we can run some code, return a value and then return right back
//to the function at the same place that we left it. To define a function to be a generator place 
//an asterisk after the key word function and inside the function we need to have the key word yield


function* numbers() {
    yield;
}

const gen = numbers();

//2. What does a generator do?

function* shopping() {
    //stuff on the sidewalk

    //walking down the sidewalk

    //go into the store with cash

    const stuffFromStore = yield 'cash'; //transition (yield) the value 'cash' to first gen2.next()

    const cleanClothes = yield 'laundry';
    //welcome back home
    return [stuffFromStore, cleanClothes]
}

//stuff in the store
const gen2 = shopping();// nothing happeneds inside our generator, yet

console.log(gen2.next()); //leave out house - executing the shopping generator function for the 
//first time, { value: 'cash', done: false}


console.log(gen2.next('groceries')); //return to first yield and continue to second yield, 
//{ value: 'laudry', done: false }

console.log(gen2.next('clean clothes')); //leave the store with groceries - return back to the secund yield
//with and return  { value: ['groceries', done: true }


//3. Iteration with generators

function* colors() {
    yield 'white';
    yield 'green';
    yield 'red';
}

// without iterations
const genColors = colors();
console.log(genColors.next()); // { value: 'white', done: false }
console.log(genColors.next()); // { value: 'green', done: false }
console.log(genColors.next()); // { value: 'red', done: false }
console.log(genColors.next()); // { value: udefined, done: true }

//with iterations
let myColors = [];
for (let color of colors()) {
    //we do not need .next() with this approach

    myColors.push(color);
}
console.log(myColors)

//4. Delegation of generator
//Practical use case
//5. Generators with Symbol.iterator
const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    //Symbol.iterator is a tool that teaches objects how to respond the for of loop to fall
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.tester
    }
}

const engineeringTeam = { 
    testingTeam,    //reference to the testingTeam object -> testingTeam: testingTeam
    size: 3, 
    department: 'Engineering',
    lead: 'Jil',
    manager: 'Alex',
    engineer: 'Dave',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam
    }
}


const names = [];
for (let name of engineeringTeam) {
    names.push(name)
}
console.log(names)

//Generators with Recursion

class Comment {
    constructor(content, children) {
        this.content = content;
        this.children = children;
    }

    *[Symbol.iterator]() {
        yield this.content;
        //array helper methods does not work with generators so we using for of loop!
        for(let child of this.children) {
            yield* child
        }
    }
}

const children = [
    new Comment('good comment', []),
    new Comment('bad comment', []),
    new Comment('meh', [])
];

const tree = new Comment('Great post!', children);

const values = [];
for (let value of tree) {
    values.push(value);
}
console.log(values);