
/// <reference types="cypress" />

export function checkError() {
  it('Check Error exists', () => {
    cy.get('.error > :nth-child(1)');
    cy.get('.error > :nth-child(2)');
    cy.get('form').submit();
    cy.get('.error > :nth-child(1)').should('be.visible')
    cy.get('.error > :nth-child(2)').should('be.visible')
  })
}

export function checkFourZeroOne() {
  it('Check 401 Unauthorized', () => {
    cy.get('.error > :nth-child(1)');
    cy.get('.error > :nth-child(2)');
    cy.get('form').submit();
    cy.get('.error > :nth-child(1) > :nth-child(2)').should('contain', '401')
    cy.get('.error > :nth-child(2) > :nth-child(2)').should('contain', 'Unauthorized')
  })
}