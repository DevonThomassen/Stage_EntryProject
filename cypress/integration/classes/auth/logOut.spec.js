
/// <reference types="cypress" />

export function logOut() {
  describe('Log out', () => {
    it('Logging out', () => {
      cy.get('.buttonbox > button').click();
      cy.get('app-dialog > :nth-child(1) > div > :nth-child(1)').click();
      cy.url().should('include', '/auth');
    })
  });
}