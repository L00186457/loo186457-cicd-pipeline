// login.js
async function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'user' && password === 'pass') {
        resolve('Login successful!');
      } else {
        reject(new Error('Invalid username or password')); 
      }
    }, 1000);
  });
}

module.exports = login;
