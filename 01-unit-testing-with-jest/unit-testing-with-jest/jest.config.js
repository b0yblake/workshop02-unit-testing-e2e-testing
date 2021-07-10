module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  // collectCoverage: true,
  // collectCoverageFrom: [
  //   'src/**/*.{js,vue}',
  //   '!src/main.js', // No need to cover bootstrap file
  // ],
}
