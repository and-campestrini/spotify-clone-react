import faker from "faker";
import { SpotifyUserProfileResponse } from "@/data/models";

export const SpotifyUserProfileResponseMock = (): SpotifyUserProfileResponse => ({
  country: faker.address.countryCode(),
  display_name: faker.name.firstName(),
  email: faker.internet.email(),
  external_urls: {
    spotify: faker.internet.url(),
  },
  followers: {
    href: faker.internet.url(),
    total: faker.random.number(),
  },
  href: faker.internet.url(),
  id: faker.random.uuid(),
  images: [
    {
      height: faker.random.number(),
      width: faker.random.number(),
      url: faker.internet.url(),
    },
  ],
  product: faker.random.arrayElement(["free", "open", "premium"]),
  type: "user",
  uri: faker.internet.url(),
});
