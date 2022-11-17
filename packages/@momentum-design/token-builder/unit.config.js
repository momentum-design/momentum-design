const config = {
  preset: 'ts-jest/presets/js-with-ts-esm',
  testEnvironment: 'node',
  transform: {
    '\\.(ts|js)x?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/@momentum-design',
  ],
};

export default config;
