const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
     baseUrl: 'https://demoqa.com',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.js',
    video: true,
    screenshotOnRunFailure: true,
    videosFolder: 'cypress/evidencias/videos',
    screenshotsFolder: 'cypress/evidencias/screenshots',
    downloadsFolder: 'cypress/downloads',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 30000,
  }
});