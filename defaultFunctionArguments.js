function makeAjaxRquest(url, method) {
    if(!method) {
        method = 'GET'
    }
    return method
    // logic to make the request
}

console.log(makeAjaxRquest('google.com'))
console.log(makeAjaxRquest('google.com', 'GET'))

// with default arguments
function makeAjaxRquestWithDefault(url, method = 'GET') {
    return method
    // logic to make the request
}

console.log(makeAjaxRquestWithDefault('google.com'))
console.log(makeAjaxRquestWithDefault('google.com', 'POST'))

// when we would like to have no value for the method use null, not undefined

console.log(makeAjaxRquestWithDefault('google.com', null))
console.log(makeAjaxRquestWithDefault('google.com', undefined)) // method = 'GET'


//Generated Id example

function User(id) {
    this.id = id;
}

function generateId() {
    return Math.random() * 9999
}

function createAdminUser(user) {
    user.admin = true;

    return user;
}

function createAdminUserWithArg(user = new User(generateId())) {
    user.admin = true;

    return user;
}


//hard to read and kind of ugly code
console.log(createAdminUser(new User(generateId())))

//way much readable code
console.log(createAdminUserWithArg())

const oldRegularUser = new User(generateId())
//when we do not want to create a new user and use existing one
console.log(createAdminUserWithArg(oldRegularUser))

/**Ex1: Using Default Arguments
 * Refactor the following code to use default function arguments.  
 * Be sure to remove any unused code after you refactor it.
 */
function sum(a, b) {
    if (a === undefined) {
      a = 0; 
    }
    
    if (b === undefined) {
      b = 0; 
    }
    
    return a + b;
  }

//Refactored
function sumWithDefArgs( a = 0, b = 0) {
    return a + b
}
/**Ex2
 * Dumping Unused Code
 * Refactor the following code to use default function arguments.  
 * Be sure to remove any unused code after you refactor it.
 */

function addOffset(style) {
    if (!style) {
      style = {}; 
    }
    
    style.offset = '10px';
    
    return style;
  }

  //Refactored

  function addOffSetWithDefArgs(style = {}){
        style.offset = '10px';

        return style;
  }