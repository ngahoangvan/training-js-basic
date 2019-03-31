// /*let numbers = [2, 7, 4, 12, 64, 1, 10];

// console.log(numbers.sort((a, b) => a > b ? 1 : a < b ? -1 : 0));*/
// let str = `nguyen thi thao linh`
// function uppercase(str) {
//     let arr = str.split(" ");
//     let newarr = []
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);

//         newarr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1, arr[i].length - 1)) //linh -> Linh
//     }
//     return newarr.join(" ");
// }

// console.log(uppercase(str));


// let arr = str.split('');
// arr[0] = arr[0].toUpperCase();
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i - 1] == " ") arr[i] = arr[i].toUpperCase();
// }
// arr = arr.join('');
// console.log(arr);

// function max(str) {
//     let arr = str.split(' ');
//     let r = arr[0];

//     //C1:
//     for (let i = 0; i < arr.length; i++) {
//         if (r.length < arr[i].length)
//             r = arr[i];
//     }
//     //C2:
//     arr.forEach((element) => {
//         if (r.length < element.length) r = element;
//     })

//     return r;
// }

// console.log(max('er rer erer'));

// let str = `thao linh`
// function vowel(str) {
//     //C1:
//     let arr = str.split("")
//     number = 0
//     for (let i = 0; i < arr.length; i++) {
//         if ((arr[i] == `u`) || (arr[i] == `e`) || (arr[i] == `o`) || (arr[i] == `a`) || (arr[i] == `i`)) {
//             number++
//         }
//     }
//     //C2:
//     str.split('').forEach(char => {
//         if (['u', 'e', 'o', 'a', 'i'].includes(char)) number++;
//     });
//     return number;
// }
// console.log(vowel(str));



