
/// <reference types="cypress" />

export function logIn() {
  describe('Log in', () => {
    it('Logging in', () => {
      cy.visit('/');
      cy.get('input[formcontrolname="email"]').type('admin');
      cy.get('input[formcontrolname="password"]').type('admin');
      cy.get('form').submit();
      cy.url().should('include', '/dashboard');
    });
  });
}

export function failLogIn() {
  it('Log in [failed]', () => {
    cy.visit('');
    cy.get('input[formcontrolname="email"]').type('Je moeder zegt: Le7nesh');
    cy.get('input[formcontrolname="password"]').type('Le7nesh a neef');
    cy.get('form').submit();
  })
}
