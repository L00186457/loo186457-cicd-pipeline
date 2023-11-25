// staging.test.js
test('Should display welcome message on staging', () => {
  const welcomeMessage = getWelcomeMessage();
  expect(welcomeMessage).toBe('Welcome to Staging!');
});

test('Should have a functional staging API', async () => {
  const response = await fetchStagingAPI();
  expect(response.status).toBe(200);
});

function getWelcomeMessage() {
  return 'Welcome to Staging!';
}

async function fetchStagingAPI() {
  return {
    status: 500,
    data: 'Staging API response',
  };
}