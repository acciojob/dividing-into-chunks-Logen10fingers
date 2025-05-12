const divide = (arr, n) => {
    const result = [];
    let currentChunk = [];
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];

        if (currentSum + value <= n) {
            currentChunk.push(value);
            currentSum += value;
        } else {
            result.push(currentChunk);
            currentChunk = [value];
            currentSum = value;
        }
    }

    if (currentChunk.length > 0) {
        result.push(currentChunk);
    }

    return result;
};

// Example usage:
const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = parseInt(prompt("Enter n: "));
alert(JSON.stringify(divide(arr, n)));
