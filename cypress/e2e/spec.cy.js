describe('Environment Test', () => {
  it('Print Username and Homepage Title', () => {
    cy.visit('/')
    cy.log("Username: "+ Cypress.env('username'));
    cy.title().then((title) => {
      cy.log(title);
    });  
  })
})