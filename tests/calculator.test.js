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
    it('should return 3 for the square root of 9', function() {
        const res = calculator.calculateSquareRoot(9);
        assert.strictEqual(res, 3);
    });
});


// Add your tests here

describe('Calculate tangent function', function() {
    const res = calculator.tangent(0);
    it('should return 0', function() {
        assert.strictEqual(res, 0);
    });

    const res1 = calculator.tangent(45);
    it('should return 1.6197751905438615', function() {
        assert.strictEqual(res1, 1.6197751905438615);
    });
});

// Test cosine function
describe('Calculator Cosine Function', function() {
    it('should return 1', function() {
        assert.strictEqual(calculator.cosine(0), 1);
    });

    it('should return -1', function() {
        assert.strictEqual(calculator.cosine(Math.PI), -1);
    });
});

// Test sine function
describe('Calculator Sine Function', function() {
    it('should return 0', function() {
        assert.strictEqual(calculator.sine(0), 0);
    });

    it('should return 1', function() {
        assert.strictEqual(calculator.sine(Math.PI / 2), 1);
    });
});

function testCalculateReciprocal() {
    // Test 1: Positive number
    try {
        console.assert(calculateReciprocal(4) === 0.25, `Test 1 Failed: Value does not match expected value`);
        console.log('Passed');
    } catch (e) {
        console.error('Test 1 Failed');
    }


    // Test 3: Division by zero (should throw an error)
    try {
        console.assert(calculateReciprocal(0)===null, 'Test 3 Failed: Value does not match to expected value');
        console.log('Passed');
        }catch(e){console.error('Test 3 Failed');}

}

