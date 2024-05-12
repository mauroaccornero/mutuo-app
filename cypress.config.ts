import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3333/",
  },
  viewportWidth: 1600,
  viewportHeight: 660,
});
