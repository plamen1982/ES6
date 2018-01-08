const sumAndVat = (array) => {
    let sum = 0;
    let VAT = 0;
    let total = 0;

    array.forEach(element => {
        sum += element;
    })
    VAT = sum * 0.2;
    total = VAT + sum;
    console.log(sum);
    console.log(VAT);
    console.log(total);
    
}

sumAndVat([1.2, 2.6, 3.5]);