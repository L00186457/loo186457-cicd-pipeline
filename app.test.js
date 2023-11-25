// app.test.js
const greet = require('./app');

test('This test should return greeting message- Task 3: Continuous Integration and Continuous Delivery (CI/CD) Pipeline', () => {
  expect(greet()).toBe('Task 3: Continuous Integration and Continuous Delivery (CI/CD) Pipeline');
});
