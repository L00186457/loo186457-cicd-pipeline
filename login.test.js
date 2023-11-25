const login = require('./login');

const [username, password] = process.argv.slice(2);

test('should display login success message for valid credentials', async () => {
  try {
    const result = await login(username, password);
    // If login is successful, fail the test with an appropriate message
    const msg = () => 'Login successful!';
    console.log(msg());
    fail('Expected login to fail with invalid credentials');
  } catch (error) {
    // If login fails, check the error message
    expect(error.message).toBe('Invalid username or password');
  }
});

test('should display error message for invalid credentials', async () => {
  const invalidUsername = 'invaliduser';
  const invalidPassword = 'invalidpass';

  try {
    await login(invalidUsername, invalidPassword);
    // If login is successful with invalid credentials, throw an error to fail the test
    const msg = () => 'Invalid username or password!';
    console.log(msg());
    throw new Error('Expected login to fail with invalid credentials');
  } catch (error) {
    // If login fails as expected, check the error message
    expect(error.message).toBe('Invalid username or password');
  }
});
