import faker from "faker";
import { SessionStorageAdapter } from "@/infrastructure/cache";

describe("SessionStorageAdapter", () => {
  let systemUnderTest: SessionStorageAdapter;

  beforeEach(() => {
    systemUnderTest = new SessionStorageAdapter();
  });

  it("should correctly save an item", () => {
    const data = faker.helpers.userCard();
    const key = faker.random.alphaNumeric();

    systemUnderTest.set(key, data);

    expect(sessionStorage.setItem).toHaveBeenCalledTimes(1);
    expect(sessionStorage.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify(data)
    );
  });

  it("should correctly retrieve an item", () => {
    const data = faker.helpers.randomize();
    const key = faker.random.alphaNumeric();

    sessionStorage.setItem(key, JSON.stringify(data));

    const retrievedData = systemUnderTest.get(key);

    expect(sessionStorage.getItem).toHaveBeenCalledTimes(1);
    expect(retrievedData).toEqual(data);
  });
});
