function runningTime(arr) {
    let shifts = 0;

    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
            shifts++; // Counting the number of shifts
        }

        arr[j + 1] = current;
    }

    return shifts;
}

// Example usage:
const arr = [2, 1, 3, 1, 2];
console.log(runningTime(arr)); // Output: 4
