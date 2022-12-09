import { faker } from '@faker-js/faker';

const createFakeRowData = () => ({
  name: faker.name.fullName(),
  email: faker.internet.email(),
  age: faker.random.numeric(2),
  occupation: faker.name.jobTitle(),
  numberOfCats: faker.random.numeric(1),
  avgDailyWaterConsumption: faker.random.numeric(2),
  location: faker.address.city(),
});

export interface CustomerDataType {
  name: string,
  email: string,
  age: string,
  occupation: string,
  numberOfCats: number,
  avgDailyWaterConsumption: number,
  location: number,
}

export default () => Array.from({ length: 100 }, createFakeRowData);