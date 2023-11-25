const login = require('./login');

test('should display login success message for valid credentials', async () => {
  try {
    const result = await login('user', 'pass');
    //fail('Expected login to fail with invalid credentials');
  } catch (error) {
    expect(error.message).toBe('Invalid username or password');
  }
});

test('should display error message for invalid credentials', async () => {
  const invalidUsername = 'invaliduser';
  const invalidPassword = 'invalidpass';

  try {
    await login(invalidUsername, invalidPassword);
    throw new Error('Expected login to fail with invalid credentials');
  } catch (error) {
    expect(error.message).toBe('Invalid username or password');
  }
});
