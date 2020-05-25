
/// <reference types="cypress" />

import { hash } from '../../../classes/assets/hash/hash';

export function addUser() {

  it('Add a new user', () => {
    for (let i = 0; i < 5; i++) {
      cy.url().should('contain', '/dashboard');
      cy.get('.col > button').click();
      cy.get(':nth-child(1) > .ng-untouched').type(`Cypress${hash(10)}`);
      cy.get(':nth-child(2) > .ng-untouched').type(`Cypress${hash(10)}`);
      cy.get(':nth-child(3) > .ng-untouched').type(`${hash(10)}@${hash(10)}.${hash(3)}`);
      cy.get(':nth-child(4) > .ng-untouched').type(`${hash(10)}`);
      cy.get('.buttons > button').click()
    }
  });

}