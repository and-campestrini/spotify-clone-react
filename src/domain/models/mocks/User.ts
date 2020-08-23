import { User } from "@/domain/models/User";
import faker from "faker";

export const UserMock = (): User => ({
  accessToken: faker.random.alphaNumeric(),
  avatarUrl: faker.internet.url(),
  displayName: faker.name.firstName(),
  email: faker.internet.email(),
  id: faker.random.uuid(),
});
