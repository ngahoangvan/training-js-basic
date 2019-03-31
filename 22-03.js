// EX1

// let numbers = [2, 7, 4, 12, 64, 1, 10];
// numbers.sort((a, b) => a > b ? 1 : a < b ? -1 : 0)

// console.log(numbers.sort((a, b) => { return a < b; })[1]);
// console.log(numbers.sort((a, b) => { return a < b; })[numbers.length - 2]);


// EX2

// let coins = [25, 10, 5, 2, 1]
// let arr = []

// function amountTocoins(numbers, coins) {
//     coins.forEach(element => {
//         while (numbers >= element) {
//             numbers -= element;
//             arr.push(element);
//         }
//     });
//     return arr
// }

// console.log(amountTocoins(46, coins));

// EX3
// let str = 'abacddbec';

// function firstNonRepeat(str) {
//     let char;
//     str.split('').forEach(element => {
//         if (str.indexOf(element) === str.lastIndexOf(element)) {
//             char = element;
//         }
//     });
//     return char
// }
// console.log(firstNonRepeat(str));

// EX4

// function isPerfectNumber(num) {
//     var half_total = 0;
//     var i = 0;
//     while (num / 2 >= i) {
//         i++;
//         if (num % i === 0)
//             half_total = half_total + i;
//     }
//     return num == half_total;
// }

// console.log(isPerfectNumber(6));

