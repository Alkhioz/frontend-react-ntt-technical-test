/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "^.+\\.tsx?$": "ts-jest" 
  },
  testMatch: ['**/__tests__/**/*.test.(ts|tsx|js|jsx)'],
  // collectCoverageFrom: ['<rootDir>/src/**/*.tsx', '<rootDir>/src/**/*.ts']
};