module.exports = {
  verbose: true,
  moduleNameMapper: {
    '\\.(css|less|sass|scss|gif|ttf|eot|svg|png|jpeg)$':
      '<rootDir>/jest.mock.js',
  },
}
