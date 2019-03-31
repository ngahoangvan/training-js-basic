
function isPrime(number) {
    if (number < 2) {
        return false
    }
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false
        }
    }
    return true
}


console.log(isPrime(13));


let arr = [1, 2, 11, 5, 8, 4, 3, 9, 15]
max = 0

for (i = 0; i < arr.length; i++) {
    if (isPrime(arr[i]) && max < arr[i]) {
        max = arr[i]
    } 
}
console.log(max);
