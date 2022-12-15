const { numVowels } = require('../num-vowels');
const assert = require('assert');

const chai = require("chai");
const expect = chai.expect;

describe('tests for the numVowels function', () => {

  it('returns 0 for words with no vowels', () => {
    const actual = numVowels('pkk');
    const expected = 0;

    assert.strictEqual(actual, expected);
  });
  
  it('returns 0 when not provided a string', () => {
    assert.strictEqual(numVowels(63), 0);
  }); 

  it('returns 0 when provided the empty string', () => {
    expect(numVowels('')).to.equal(0);
  });

  it('returns counts "a" vowels', () => {
    assert.strictEqual(numVowels('cat'), 1);
  });


  it('returns 2 when given the string "abba"', () => {
    assert.strictEqual(numVowels('abba'), 2);
  });

  it('returns 2 when given the string "apple"', () => {
    assert.strictEqual(numVowels('apple'), 2);
  });

  it('returns 5 when given the string "aeiou"', () => {
    assert.strictEqual(numVowels('aeiou'), 5);
  });

  it('returns 1 when given the string "Apple"', () => {
    assert.strictEqual(numVowels('Apple'), 2);
  });

});
