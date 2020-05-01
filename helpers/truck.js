import * as faker from 'faker';

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
  type: `${faker.address.state()} class ${faker.random.arrayElement(["clipper", "junk", "tanker"])}`
});

export default { Truck }