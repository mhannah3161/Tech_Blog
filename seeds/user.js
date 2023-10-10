const { User } = require('../models');

const userData =
[
  {
    "username": "shaquille.oatmeal",
    "email": "shaq@gmail.com",
    "password": "abcde12345"
  },
  {
    "username": "hoosier_daddy",
    "email": "notme@hotmail.com",
    "password": "passgasword123"
  },
  {
    "username": "HairyPoppins",
    "email": "waxypads@gmail.com",
    "password": "waxPW1234"
  },
  {
    "username": "fedora_the_explora",
    "email": "xplor@yahoo.com",
    "password": "passyourword12345"
  },
  {
    "username": "pluralizes_everythings",
    "email": "yeseseverythings@gmail.com",
    "password": "passwords1s"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;