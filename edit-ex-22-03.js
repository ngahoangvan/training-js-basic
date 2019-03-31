// let arr = [5, 4, 3, 2, 1];
// let acc = arr.sort((a, b) => a < b);
// console.log(acc[1], acc[acc.length - 2]);


// let arr = [100, 50, 25, 10, 5, 2, 1];
// let money = 198;
// function change(arr) {
//     arr.forEach(element => {
//         //C1
//         let change = Math.floor(money / element);
//         for (i = 0; i < change; i++) console.log(element);
//         money %= element;

//         //C2
//         // while (money > element) {
//         //     money -= element
//         //     console.log(element);
//         // }
//     });
// }
// change(arr)


// EX3

function firstNonRepeat(str) {
    // let a = [];
    // arr = str.split('')
    // arr.forEach(element => {
    //     if (arr.indexOf(element) == arr.lastIndexOf(element)) {
    //         a.push(element);
    //     }
    // });
    // return a[0];

    return str.split('')
        .map(element => str.indexOf(element) == str.lastIndexOf(element) ? element : null)
        .filter(_ => _)[0]

}

console.log(firstNonRepeat('abacddbecl'));