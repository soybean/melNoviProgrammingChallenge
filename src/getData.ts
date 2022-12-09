import { faker } from '@faker-js/faker';

const createFakeRowData = () => ({
  name: faker.name.fullName(),
  email: faker.internet.email(),
  age: faker.random.numeric(2),
  occupation: faker.name.jobTitle(),
  numberOfCats: faker.random.numeric(1),
  avgDailyWaterConsumption: faker.random.numeric(2),
  location: faker.address.city(),
  phoneNumber: faker.phone.number(),
  favColor: faker.color.human(),
  whatsBest: faker.random.words(),
  educationLevel: faker.helpers.arrayElement(['High school', 'College', 'Masters Program', 'Doctorate']),
});

export interface CustomerDataType {
  name: string,
  email: string,
  age: string,
  occupation: string,
  numberOfCats: string,
  avgDailyWaterConsumption: string,
  location: string,
  phoneNumber: string,
  favColor: string,
  whatsBest: string,
  educationLevel: string,
}

export default () => Array.from({ length: 100 }, createFakeRowData);