// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// console.log(pow(2, 3));
// console.log(pow(2, 4));
// console.log(pow(2, 5)); // 32
// console.log(pow(2, 6)); // 64


function factorial(n) {

    if(n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const fact = factorial(6);
console.log(fact);