const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.youtube.com/",
    env: {
      "devUrl": "https://usc.edu/",
      "prodUrl": "https://www.sunpeaksresort.com/"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const environment = config.env.ENV;
      const envConfig = {
        local:{
          baseUrl: "https://www.yourlibrary.ca/"
        },
        dev: {
           baseUrl: "https://www.skisilverstar.com/"
        },
        staging: {
          baseUrl: "https://www.cypress.io/"
        },
        production: {
          baseUrl: "https://www.grousemountain.com/"
        }
      };
      return { ...config, ...envConfig[environment] };
    },
  },
});
