import * as faker from 'faker';
import { DIRECTION_NAMES, SHIP_TYPES } from './arrays'

const ShipName = () => `Swarm ${faker.random.arrayElement(SHIP_TYPES)} ${faker.random.arrayElement(DIRECTION_NAMES)}${faker.random.arrayElement([faker.address.county(), faker.address.state(), faker.address.country()])}`;

const Captain = () => ({
  title: "Captain",
  firstName: faker.name.firstName(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName()
});

const FirstOfficer = () => ({
  title: faker.random.arrayElement(["First-Mate", "Commander"]),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName()
});

const Ship = (captain, firstOfficer, shipName) => ({
  captain: {
    title: captain.title,
    firstName: captain.firstName,
    lastName: captain.lastName,
    fullName: `${captain.title} ${captain.firstName} ${captain.lastName} of the ${shipName}`
  },
  firstOfficer: {
    title: firstOfficer.title,
    firstName: firstOfficer.firstName,
    lastName: firstOfficer.lastName,
    fullName: `${firstOfficer.title} ${firstOfficer.firstName} ${firstOfficer.lastName} of the ${shipName}`
  },
  name: shipName
});

export default {
  ShipName,
  Captain,
  FirstOfficer,
  Ship
};