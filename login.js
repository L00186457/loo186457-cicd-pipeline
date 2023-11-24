// login.js

/**
 * Simulates a login function.
 * @param {string} username - The entered username.
 * @param {string} password - The entered password.
 * @returns {string} - A message indicating the result of the login attempt.
 */
function login(username, password) {
    // Replace this with your actual login logic
    const validUsername = 'user';
    const validPassword = 'pass';
  
    if (username === validUsername && password === validPassword) {
      return 'Login successful!';
    } else {
      return 'Invalid username or password';
    }
  }
  
  // Export the login function for testing
  module.exports = login;
  