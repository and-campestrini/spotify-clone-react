module.exports = {
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
  preset: "ts-jest",
  setupFilesAfterEnv: ["./src/setupTests.ts"],
  testEnvironment: "node",
};
