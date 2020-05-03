import * as faker from 'faker';
import * as converter from 'number-to-words';

const ppamt = () => faker.random.number({ min: 50000, max: 100000 });

const storageRetId = () => ({
  term: "Storage Retreival ID",
  id: `${faker.random.alphaNumeric(3).toUpperCase()}-${faker.random.number({min:10000000, max:99999999})}`
})

const criminal = () => ({
	wanted: `${converter.toWords(faker.random.number(100))} swarm vessels`,
	firstName: faker.name.firstName('Man'),
  lastName: faker.name.lastName(),
});

const licenseOfficial = () => ({
	firstName: faker.name.firstName(),
  lastName: faker.name.lastName()
});

export default { ppamt, storageRetId, criminal, licenseOfficial }