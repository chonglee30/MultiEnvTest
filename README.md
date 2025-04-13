# MultiEnvTest
Multiple Environment Cypress Tests 

Case: default from cypress.config.js file
open baseUrl
ex: npx cypress open and run specEnv.cy.js file

Case: 
run specCodeEnv.cy.js file and if specified environment in cypress.env.json will be overwritten.
if not specify from this file, then env section from the cypress.config.js file will be the url.

Case: open baseUrl and user credentials from following xxconfig.js files
npm run cypress-dev-open
npx cypress open --config-file dev.config.js

npm run cypress-stage-open
npx cypress open --config-file staging.config.js

npm run cypress-prod-open
npx cypress open --config-file prod.config.js

Case: open baseUrl and user credentials from cypress.config.js file inside the setupNodeEvents
npx cypress open --env ENV=local
npx cypress open --env ENV=dev
npx cypress open --env ENV=staging
npx cypress open --env ENV=production
