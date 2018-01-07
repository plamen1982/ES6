const input1 = [2, 3, 4]
const input2 = [1.5, 1.5, -1]
const sum3Numbers = (array) => {
    let sum = 0;
    array.forEach(element => {
        sum += element
    }); 

   return sum;
}

console.log(sum3Numbers(input1));
console.log(sum3Numbers(input2));