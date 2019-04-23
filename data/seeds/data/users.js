const faker = require("faker");

module.exports = [
  // id 1
  {
    first_name: "Admin",
    last_name: "Admin",
    email: "Admin",
    phone: "555-555-5555",
    password: "Admin",
    is_admin: true,
    airport: "Denver"
  },
  // id 2
  {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumberFormat(),
    password: "password"
  },
  // id 3
  {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumberFormat(),
    password: "password"
  },
  // id 4
  {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumberFormat(),
    password: "password"
  },
  // id 5
  {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumberFormat(),
    password: "password"
  },
  // id 6
  {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumberFormat(),
    password: "password"
  },
  // id 7
  {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumberFormat(),
    password: "password"
  },
  // id 8
  {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumberFormat(),
    password: "password"
  }
];
