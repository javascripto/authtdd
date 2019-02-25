const routes = require('express').Router();
const { User } = require('./app/models');

// Testing user creation: node src/server.js
User.create({
  name: 'Yuri',
  email: 'yuri@mail.com',
  password_hash: 'asd12uhdas7y12i'
});

module.exports = routes;
