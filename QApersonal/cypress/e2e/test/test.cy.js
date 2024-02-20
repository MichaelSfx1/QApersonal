import { URLS } from '/urls';
import { USERS} from '/users';

describe('test', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
      cy.visit(URLS.HOME);
    });

    it('add and delete product', () => {
    cy.login(USERS.MICHAEL.EMAIL,  USERS.MICHAEL.PASS);
    cy.url().should('include', URLS.HOME);
    cy.addproduct('Samsung galaxy s7');
    cy.deleteproduct('Samsung galaxy s7');
  });

})