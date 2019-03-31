function isSymmetry(str) {
    if (typeof str === 'string') {
        str = str.trim()
        for (let i = 0, j = str.length - 1; i < j; i++ , j--) {
            if (str[i] != str[j]) {
                return false
            }
        }
        return true
    } else return 'Input is not a String'
}

console.log(isSymmetry('abba')); //true
console.log(isSymmetry('abbaa')); //false
console.log(isSymmetry(12345)); //Input is not a String
