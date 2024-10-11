const assert = require('assert');
const calculator = require('../calculator');

// Test memory functions
describe('Calculator Memory Functions', function() {
    
});


// Test calculation functions
describe('Calculator Calculation Functions', function() {
    const res = calculator.calculateSquareRoot(4);
    it('should return 2', function() {
        assert.strictEqual(res, 2);
    });
});


// Add your tests here
describe('Calculator Calculation Functions', function() {
    it('should return 2 for the square root of 4', function() {
        const res = calculator.calculateSquareRoot(4);
        assert.strictEqual(res, 2);
    });

    it('should return 3 for the square root of 9', function() {
        const res = calculator.calculateSquareRoot(9);
        assert.strictEqual(res, 3);
    });


});