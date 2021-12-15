var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('return when output is 5! is equal to 120', () => {
      // Setup
const inputNumber = 5;
const expectedResult = 120;
      // Exercise
const result = Calculate.factorial(5);
      // Verify
      assert.equal(result, expectedResult);
    });
     it('return when output is 3! is equal to 6', () => {
      // Setup
const inputNumber = 3;
const expectedResult = 6;
      // Exercise
const result = Calculate.factorial(3);
      // Verify
      assert.equal(result, expectedResult);
    });
     it('return when output is 0! is equal to 1', () => {
      // Setup
const inputNumber = 0;
const expectedResult = 1;
      // Exercise
const result = Calculate.factorial(0);
      // Verify
      assert.equal(result, expectedResult);
    });
    
  });
});
