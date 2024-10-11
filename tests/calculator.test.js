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

// Test cosine function
describe('Calculator Cosine Function', function() {
    it('should return 1', function() {
        assert.strictEqual(calculator.cosine(0), 1);
    });

    it('should return -1', function() {
        assert.strictEqual(calculator.cosine(Math.PI), -1);
    });
});