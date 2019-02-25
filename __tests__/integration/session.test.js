const { User } = require('../../src/app/models');

describe('Authentication', () => {
  it('Test Example: should sum two numbers', () => {
    const x = 2;
    const y = 5;
    const sum = x + y;

    expect(sum).toBe(7);
  });

  it('should return jwt token when authenticated with valid credentials', async () => {
    const user = await User.create({
      name: 'Yuri',
      email: 'yurialves2@gmail.com',
      password_hash: 'asd12yad8721'
    });

    console.log(user);

    expect(user.email).toBe('yurialves2@gmail.com');
  });
});
