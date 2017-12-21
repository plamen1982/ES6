var products = [
    { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
    { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
    { name: 'celery', type: 'vegetable', quantity: 30, price: 13 },
    { name: 'orange', type: 'fruit', quantity: 3, price: 5 }
    
];  

//ES5

var filteredProducts = [];

for (var i =0; i < products.length; i++) {
    if(products[i].type ==='fruit') {
        filteredProducts.push(products[i])
    }
}

console.log(filteredProducts);

//ES6 - filter also return new array with the filtered results. keyword return also required

var productsFromFilter =  products.filter(function(product){
    return product.type === 'fruit';
})

//ES6. Type is 'vegetable', quantity i greater than o, price is less than 10

var productsFromFilter2 = products.filter(function(product) {
    return product.type === 'vegetable' && product.quantity > 0 && products.price < 15
});

//ES6 example with blog system

var post = { id: 4, title: 'New Post' };

var comments = [
    { postId: 4, content: 'awesome post' },
    { postId: 3, content: 'it was ok' },
    { postId: 4, content: 'neat' }    
];

function commentsForPost(post, comments) {
    return comments.filter(function(comment){
        return comment.postId === post.id
    })
};

/**Ex1: Filtering Values
 * Filter the array of numbers using the filter helper, creating a new array that only 
 * contains numbers greater than 50.  Assign this new array to a variable called 'filteredNumbers'.  
 * Don't forget to use the 'return' keyword in the function! 
 */

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number) {
    return number > 50
})

/**Ex2: Handling Permissions with Filter
 * Filter the array of users, only returning users who have admin level access.  
 * Assign the result to the variable 'filteredUsers'. Don't forget to use the 'return' 
 * keyword in the function!
 */

var users = [
    { id: 1, admin: true },  
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
   ];
   
   var filteredUsers = users.filter(function(user) {
       return user.admin === true;
   })

   /**Ex3: Challenging! Implementing 'reject'.
    * This is a hard one!  Create a function called 'reject'.  Reject should work in 
    * the opposite way of 'filter' - if a function returns 'true', the item should *not* 
    * be included in the new array.  Hint: you can reuse filter.
    */
    var numbers2 = [10, 20, 30];
    function reject(array, itteratorFunction) {
        array.filter(itteratorFunction)
    }

    function itteratorFunction(number) {
        return !(number > 15)
    }
var lessThanFifteen = reject(numbers2, itteratorFunction);
console.log(lessThanFifteen)