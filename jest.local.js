module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: ['**/specs/*.spec.*'],
  reporters: [
    'default',
    'jest-html-reporters',
  ],
  globals: {
    testTimeout: 50000,
  },
  verbose: true,
};
