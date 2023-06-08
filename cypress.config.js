const { defineConfig } = require("cypress");
const eyesPlugin = require('@applitools/eyes-cypress')

module.exports = eyesPlugin(defineConfig({
  fixturesFolder: false,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
    }
  }
}))
