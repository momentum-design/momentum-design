const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '<rootDir>/src/commands/main/main.test.ts',
  ],
};

module.exports = config;
