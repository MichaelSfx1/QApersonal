Cypress.Commands.add('login', (email, password) => {
    cy.get('#login2').click();
    cy.wait(1000);
    cy.get('#loginusername').type(email);
    cy.get('#loginpassword').type(password);
    cy.wait(1000);
    cy.get('.btn-primary').eq(2).click();
  });
  

  Cypress.Commands.add('addproduct', (product) => {
    cy.get('#nava').click();
    cy.contains(product).click();
    cy.get('.btn-success').click();
    cy.get('#cartur').click();
    cy.get('tr').should('contain.text', product);
  });


  Cypress.Commands.add('deleteproduct', (product) => {
    cy.contains('tr', product).within(() => {
      cy.contains('Delete').click();
    });
    cy.get('#page-wrapper').should('not.contain', product);

  });