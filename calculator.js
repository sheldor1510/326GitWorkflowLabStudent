

// TODO: Fix the square root function not displaying
function calculateSquareRoot(value) {
    return Math.sqrt(value)
    
    // return the square root of the value
}

// TODO: Implement square function
function calculateSquare(value) {
    // Hint: Use exponentiation
    // return the square root of the value
    return value**2;

}

// TODO: FIX reciprocal function
function calculateReciprocal(value) {
    // Hint: Reciprocal is 1/x
    if (value===0){
    return null;
}
else{
   return 1/value;
}
}


// TODO: Implement natural log function
function naturalLog(value) {
    // return the natural log of the value
}

// TODO: Implement sine function
function sine(value) {
    // return the sine of the value
}

// TODO: Implement cosine function
function cosine(value) {
    // return the cosine of the value
    return Math.cos(value);
}

// TODO: Implement tangent function
function tangent(value) {
    // return the tangent of the value
    return Math.tan(value);
}




module.exports = {
    calculateSquareRoot,
    calculateSquare,
    calculateReciprocal,
    tangent,
    cosine
};
