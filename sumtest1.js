const sum = require('./sum');

test('Add the two numbers', () => {
    expect(sum(1,1)).toBe(2);
});
