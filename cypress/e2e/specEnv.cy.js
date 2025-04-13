describe('Testing with Config Files: ', () => {
    it('Check the Homepage title:', () => {
      cy.visit('')
      cy.title().then((title) => {
        cy.log(title);
      });    
    })
  })