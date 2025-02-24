// const request = require('supertest');
// const app = require('../app');

// test('GET / should return Hello CI/CD!', async () => {
//     const response = await request(app).get('/');
//     expect(response.text).toBe('Hello CI/CD!');
// });
const app = require('../app');

test('adds 1 + 2 to equal 3', () => {
  expect(app(1, 2)).toBe(3);
});