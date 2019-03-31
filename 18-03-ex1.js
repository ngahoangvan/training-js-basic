function factorial(num) {
    if (num === 0) { return 1; }
    else { return num * factorial(num - 1); }
}

//Not sse recursive
// function factorial(num) {
//     var rval = 1;
//     for (var i = 2; i <= num; i++)
//         rval = rval * i;
//     return rval;
// }

console.log(factorial(4));
