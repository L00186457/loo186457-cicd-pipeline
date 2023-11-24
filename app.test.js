// app.test.js
const greet = require('./app');

test('This test should return greeting message- This is task 3 test file', () => {
  expect(greet()).toBe('This is task 3 test file!');
});
