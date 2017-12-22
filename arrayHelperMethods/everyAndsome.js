var computer = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunPrograms = false;

// ES6

for (var i = 0; i < computers.lenght; i++) {
    var computer = computers[i]

    if (computer.ram < 16) {
        allComputersCanRunProgram = false
    } else {
        onlySomeComputersCanRunPrograms = true;
    }
}

console.log(allComputersCanRunProgram)
console.log(onlySomeComputersCanRunPrograms)

// ES6 - every method return true(if all elements from array are fitting a critiria)
// or false(if they do not fit a criteria) 

computers.every(function(computer) {
    return computer.ram > 16;
});

// ES6 - some method return true(if only one of the array elements fitting a critiria)
// or false(if all of the elements does't fit a criteria) 

computers.some(function(computer) {
    return computer.ram > 16
});

var names = [
    "Alexandria",
    "Matthew",
    "Joe"
];

names.every(function(name){
    return name.length > 4
}); // false

names.some(function(name) {
    return name.length > 5
}); // true

//ES5 - example validating form

function Field(value) {
    this.value = value;
}

Field.prototype.validate = function () {
    return this.value.lenght > 0;
}

var username = new Field("2cool");
var password = new Field("my_password");
var birthdate = new Field("10/10/2010");

//validating our form
username.validate()&&password.validate();

//ES6 - example validating form with every method

var fields = [username, password, birthdate];

var formIsValid = fields.every(function (field) {
    return field.validate();
});

if (formIsValid) {
    //allow user to submit!
} else {
    // show an error message
}

/** Ex1: Finding Submitted Users
 * Given an array of users, return 'true' if every user has submitted a request form.
 * Assign the result to the variable 'hasSumbmitted'.
 */

var users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
  ];
  
  var hasSubmitted = users.every(function(user) {
      return user.hasSubmitted === true
  }); 

  console.log(hasSubmitted);

  /** Ex2: In Progress Network Requests
   * Given an array of network objects representing network requests, assign the boolean
   * 'true' to the variable 'inProgress' if any network request has a 'status' of 'pending'.
   */

  var requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
  ];
  
  var inProgress = requests.some(function(request) {
    return requests.status === 'pending'
  });

  console.log(inProgress)