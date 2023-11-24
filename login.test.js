// login.test.js
const login = require('./login');

test('should display login success message for valid credentials', () => {
  // Mock the login functionality for testing
  const loginResult = login('user', 'pass');
  expect(loginResult).toBe('Login successful!');
});

test('should display error message for invalid credentials', () => {
  // Mock the login functionality for testing
  const loginResult = login('invaliduser', 'invalidpass');
  expect(loginResult).toBe('Invalid username or password');
});
