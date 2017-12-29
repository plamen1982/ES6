//resole() and reject() are functions, after we execute resolve()/reject() 
//we can registred respectively, then()/catch() callbacks
let promise = new Promise((resolve, reject)=>{
    reject();
});


promise
    .then(() => console.log('Finally finished!'))
    .then(() => console.log('I was also ran!!!'))
    .catch(()=> console.log('Uh oh'))

//fetch example: copy -> paste the code in the browser's console 
let url = "https://jsonplaceholder.typicode.com/posts/"

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));

let wrongUrl = "https://jsonplaceholder.typicode.com123/posts/"

fetch(wrongUrl)
    .then(response => console.log(response))
    .catch(error => console.log('Bad', error)); //The error will execute

let wrongResource = "https://jsonplaceholder.typicode.com/posts1231e2/"

fetch(wrongResource)
    .then(response => console.log(response))
    .catch(error => console.log('Bad request', error)) // The error will not be execute! 

    // Conclusions:  Use  libraries like superagent, jquery and so on..

