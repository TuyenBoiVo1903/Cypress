const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout : 100000,
  reporter : 'cypress-mochawesome-reporter',
  projectId: "vr4ik9",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); // for report
    },
  },
});
