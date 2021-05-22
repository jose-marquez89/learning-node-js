let someArray = [];
const ARRAY_LENGTH = 20;

function factorial(n) {
    let product = n;
    let next = n - 1;

    while (next > 1) {
        product *= next;
        next--;
    }

    return product;
}

for (let i = 0; i < ARRAY_LENGTH; i++) {
    someArray.push(factorial(i))
}

for (i = 0; i < ARRAY_LENGTH; i++) 
    console.log(someArray[i]);