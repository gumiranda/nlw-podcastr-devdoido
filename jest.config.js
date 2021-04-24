module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  },
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/*stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
};
