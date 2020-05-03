import * as faker from 'faker';
import { DIRECTION_NAMES, SHIP_TYPES } from './arrays';

const shipType = () => faker.random.arrayElement(SHIP_TYPES);

const ShipName = () => `Swarm ${shipType()} ${faker.random.arrayElement(DIRECTION_NAMES)}${faker.random.arrayElement([faker.address.county(), faker.address.state(), faker.address.country()])}`;

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

const cargoMaster = () => ({
  title: "Cargomaster",
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName()
});

const idOfficer = () => ({
  title: "Security Identification Officer",
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName()
});


const Ship = (captain, firstOfficer, shipName, cargoMaster, idOfficer) => ({
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
  cargoMaster: {
      title: cargoMaster.title,
      firstName: cargoMaster.firstName,
      lastName: cargoMaster.lastName,
      fullName: `${cargoMaster.title} ${cargoMaster.firstName} ${cargoMaster.lastName} of the ${shipName}`
  },
  idOfficer: {
      title: idOfficer.title,
      firstName: idOfficer.firstName,
      lastName: idOfficer.lastName,
      fullName: `${idOfficer.title}: ${idOfficer.lastName}`
  },
  name: shipName
});

export default {
  ShipName,
  Captain,
  FirstOfficer,
  Ship,
  cargoMaster,
  idOfficer
};