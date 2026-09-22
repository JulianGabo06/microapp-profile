/** @type {import('jest').Config} */
module.exports = {
  preset: 'jest-expo',
  setupFiles: ['<rootDir>/test/setup.js'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/__tests__/**'],
  moduleNameMapper: {
    // Uniwind compila global.css con Rspack; en Jest basta un módulo vacío.
    '\\.css$': '<rootDir>/test/mocks/style.js',
  },
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
};
