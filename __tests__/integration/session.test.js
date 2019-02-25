const request = require('supertest');

const app = require('../../src/app');
const truncate = require('../utils/truncate');
const factory = require('../factories');

describe('Authentication', () => {

  beforeEach(async () => await truncate());

  it('should authenticate with valid credentials', async () => {
    const user = await factory.create('User', {
      password: 'asd12yad8721'
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: 'asd12yad8721'
      });

    expect(response.status).toBe(200);

  });

  it('should not authenticate with invalid credentials', async () => {
    const user = await factory.create('User', {
      password: 'asd12yad8721'
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123456'
      });

    expect(response.status).toBe(401);
  });

  it('should return jwt token when authenticated', async () => {
    const user = await factory.create('User', {
      password: 'asd12yad8721'
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: 'asd12yad8721'
      });

    expect(response.body).toHaveProperty('token');
    console.log(response.body.token);
  });
});
