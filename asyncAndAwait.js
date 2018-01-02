//ES6
function sleep(amount) {
    return new Promise((resolve, reject) => {
        if(amount === 2000) {     
            return reject(`${amount} is the limit, sorry `, amount)
        }
        setTimeout(() => { 
        return resolve(`Slept for ${amount}`)
    }, amount)
    });
}

sleep(500)
        .then((result) =>  {
            console.log(result)
            return sleep(1000)
        })
        .then((result) => {
            console.log(result)
            return sleep(1500)
        })
        .then((result) => {
            console.log(result)
            return sleep(2000)
        })
        .catch((error) => {
            return console.log(error)
        })
//ES7
async function go () {
    try {
        const response1 = await sleep(500) 
        console.log(response1)
        const response2 = await sleep(1000) 
        console.log(response2)
        const response3 = await sleep(1500) 
        console.log(response3)
        const response4 = await sleep(2000)
        console.log(response4)
    } catch(err) {
        console.log(err)
    }
}

go()

//Create a HOF - high order function

/**
 * function handleError(fn) {
 *      return function(...params) {
 *          return fn(...params).catch(function (err) {
 *                  console.log(`Opps`, err)
 *           }) 
 *      }
 * }
 * 
 */

 // create a new functio with your HOF, wrap it!

 /** const safeYolo = handleError(yolo) 
  *  safeYolo()
  */
  //https://www.youtube.com/watch?v=9YkUCxvaLEk&t=