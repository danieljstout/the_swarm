import * as faker from 'faker';
import { DIRECTION_NAMES, SHIP_TYPES } from './arrays';

const shipType = () => faker.random.arrayElement(SHIP_TYPES);

const ShipName = (shiptype) => `Swarm ${shiptype} ${faker.random.arrayElement(DIRECTION_NAMES)}${faker.random.arrayElement([faker.address.county(), faker.address.state(), faker.address.country()])}`;

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


const Ship = () => {
  let shiptype = shipType();
  let shipname = ShipName(shiptype);
  let captain = Captain();
  let firstofficer = FirstOfficer();
  let cargomaster = cargoMaster();
  let idofficer = idOfficer();
  return ({
    captain: {
      title: captain.title,
      firstName: captain.firstName,
      lastName: captain.lastName,
      fullName: `${captain.title} ${captain.firstName} ${captain.lastName} of the ${shipname}`
    },
    firstOfficer: {
      title: firstofficer.title,
      firstName: firstofficer.firstName,
      lastName: firstofficer.lastName,
      fullName: `${firstofficer.title} ${firstofficer.firstName} ${firstofficer.lastName} of the ${shipname}`
    },
    cargoMaster: {
        title: cargomaster.title,
        firstName: cargomaster.firstName,
        lastName: cargomaster.lastName,
        fullName: `${cargomaster.title} ${cargomaster.firstName} ${cargomaster.lastName} of the ${shipname}`
    },
    idOfficer: {
        title: idofficer.title,
        firstName: idofficer.firstName,
        lastName: idofficer.lastName,
        fullName: `${idofficer.title}: ${idofficer.lastName}`
    },
    name: shipname,
    type: shiptype
  });
};

export default {
  ShipName,
  Captain,
  FirstOfficer,
  Ship,
  cargoMaster,
  idOfficer,
  shipType
};