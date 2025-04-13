const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.amazon.com",
    env: {
      username:"prodUser"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
