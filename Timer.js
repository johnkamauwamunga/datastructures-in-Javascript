function superDigit(n, k) {
    // Function to calculate the sum of digits of a number
    function digitSum(num) {
        if (num < 10) return num;
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return digitSum(sum);
    }

    // Calculate the sum of digits of n
    let sum = 0;
    for (let digit of n) {
        sum += parseInt(digit);
    }

    // Calculate the super digit of the sum of digits of n
    let superDigit = digitSum(sum);

    // If k is greater than 1, multiply the super digit by k and find the super digit again
    if (k > 1) {
        superDigit *= k;
        superDigit = digitSum(superDigit);
    }

    return superDigit;
}

// Sample Input 0
console.log(superDigit("148", 3)); // Output: 3

// Sample Input 1
console.log(superDigit("9875", 4)); // Output: 8

// Sample Input 2
console.log(superDigit("123", 3)); // Output: 9
