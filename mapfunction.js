function map(array, func) {
    // Check if func is a function
    if (typeof func !== 'function') {
        return 'given argument is not a function';
    }

    // Check if array contains only numbers
    if (!array.every(element => typeof element === 'number')) {
        return 'array should contain only numbers';
    }

    // Apply the predicate function to each element of the array
    return array.map(func);
}

// Predicate function to check if a number is even
function isEven(num) {
    return num % 2 === 0;
}

// Test cases
console.log(map([1,2,3,4], isEven));  // Output: [ false, true, false, true ]
