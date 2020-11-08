const sum = require('./sum');
 
test('add two numbers', () => {
     expect(sum(3.3,3)).toBe(6.3);
});
