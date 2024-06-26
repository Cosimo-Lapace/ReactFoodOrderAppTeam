import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    baseUrl: "http://localhost:5173/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.screenshotsFolder = "cypress/screenshots";
      config.proxyUrl="http://localhost:5173/"
    },
    specPattern: "cypress/integration/test/*.ts",
  },
});
