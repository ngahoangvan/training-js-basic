function minNumber(number) {
    let min = number % 10;
    while (number != 0) {
        if (number % 10 < min) {
            min = number % 10
        }
        number = parseInt(number / 10)
    }
    return min
}

console.log(minNumber(582654));
