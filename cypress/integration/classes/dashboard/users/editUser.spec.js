
/// <reference types="cypress" />

import { hash } from '../../../classes/assets/hash/hash';
import { img } from '../../../classes/assets/images/images';
import { childOfKind } from 'tslint';

export function editUser() {

  it('Edit some users', () => {
    cy.url().should('contain', '/dashboard');
    for (let i = 0; i < 5; i++) {
      cy.get('[title="Last page"]').click();
      cy.get('[title="Previous page"]').click();
      cy.wait(100);
      cy.get(`.grid div:nth-child(${i + 1})`).click();
      cy.get('[title="Edit user"]').click();

      cy.find('.user').length === 0

      const r = Math.floor(Math.random() * img.length);
      cy.get('[formControlName="avatar"]').clear().type(img[r]);
      cy.get('[formControlName="firstName"]').clear().type(hash(20));
      cy.get('[formControlName="lastName"]').clear().type(hash(20));
      cy.get('.edit > button').click();
      cy.get('app-dialog > :nth-child(1) > div > :nth-child(1)').click();
      cy.wait(500);
    }
  });

}