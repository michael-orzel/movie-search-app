/*export default {
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    moduleNameMapper: {
      "^(\\.{1,2}/.*)\\.js$": "$1",
      "\\.(css|jpg|png|svg)$": "<rootDir>/__mocks__/fileMock.js",
    },
    extensionsToTreatAsEsm: [".js", ".jsx"],
    transform: {},
  };
  */

  export default {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleFileExtensions: ['js', 'jsx'],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
    },
    transform: {
      '^.+\\.(js|jsx)$': 'esbuild-jest',
    },
    testPathIgnorePatterns: ["/node_modules/"], // Added
  };
  