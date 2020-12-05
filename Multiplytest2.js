const sum = require('./sum');

test('add two numbers', () => {
    expect(sum(5,5)).toBe(10);
});
