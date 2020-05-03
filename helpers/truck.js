import * as faker from 'faker';
import { DIRECTION_NAMES, SHIP_TYPES } from './arrays';

String.prototype.titleize = function() {
  return this.split(" ").map(e => e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()).join(" ");
}

const Truck = () => ({
  pilot: {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    handle: `${faker.random.arrayElement(["lil", "big"])} ${faker.hacker.noun()}`.titleize()
  },
  assistant: {
    name: faker.name.firstName(),
    type: "HVA",
    longFormType: "Holographic Victorian Assistant"
  },
  name: `Ol' ${faker.name.firstName()}`,
  type: `${faker.address.state()} class ${faker.random.arrayElement(["clipper", "junk", "tanker"])}`,
  company: `The Great ${faker.random.arrayElement(DIRECTION_NAMES)}${faker.random.arrayElement([faker.address.county(), faker.address.state(), faker.address.country()])} Transport Corporation`
});

export default { Truck }
