// This code file is checking each environments from cypress.env.json file
// When I run following command: npx cypress open
describe('Checking environment from cypress.env.json file and Homepage Title ', () => {
  // Case1: stageUrl from cypress.env.json will be printed by default
  // Case2: Unless specify environment from the command
  // Environment will be overwritten from the command
  // Example: npx cypress open --env stageUrl=https://ca.yahoo.com/
  it('Verify from the Staging Environment:', () => {
    cy.visit(Cypress.env('stageUrl'))
    cy.title().then((title) => {
      cy.log(title);
    });    
  });

  // Case1: prodUrl from cypress.env.json will be printed by default
  // Case2: Unless specify environment from the command
  // Environment will be overwritten from the command
  // Example: npx cypress open --env prodUrl=https://ca.yahoo.com/
  it('Verify from the Production Environment:', () => {
    cy.visit(Cypress.env('prodUrl'))
    cy.title().then((title) => {
      cy.log(title);
    });    
  });

  // Case1: devUrl from cypress.config.js will be printed by default
  // Reason: no devUrl defined from the cypress.env.json
  // Environment will be overwritten from the command
  // Example: npx cypress open --env devUrl=https://ca.yahoo.com/
  it('Verify from the Dev Environment:', () => {
    cy.visit(Cypress.env('devUrl'))
    cy.title().then((title) => {
      cy.log(title);
    });    
  });
});