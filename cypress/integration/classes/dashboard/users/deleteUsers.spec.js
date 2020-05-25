
/// <reference types="cypress" />

export function deleteUser() {

  it('Delete all users from the last page', () => {
    cy.url().should('contain', '/dashboard');
    
    for (let i = 0; i < 5; i++) {
      cy.get('[title="Last page"]').click();
      cy.wait(100);
      cy.get('.grid div:nth-child(1)').click();
      cy.get('[title="Remove user"]').click();
      cy.get('app-dialog > :nth-child(1) > div > :nth-child(1)').click();
    }
  });

}