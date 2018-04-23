// to be is left side
// to equal is right side


// Write a function that takes in an array of numbers 
function sortArray(array) {
    return array.sort(function(a, b) {
        return a - b;
    });
};

function methodToTest(a, b, c) {
    return a + b + c;
};

function sinonSpy() {
    Date.now();
}

function sinonStub() {
    return Date.now();
}

module.exports = {
    sortArray,
    methodToTest,
    sinonSpy,
    sinonStub
}

// checks whether each number is less than the previous one.
// Return true if all of them fit this condition, 
// otherwise return false.