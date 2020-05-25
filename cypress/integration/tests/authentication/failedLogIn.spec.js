/// <reference types="cypress" />

import { failLogIn } from '../../classes/auth/logIn.spec';
import { checkError, checkFourZeroOne } from '../../classes/auth/validation.spec';

export function failedLogIn() {

  describe('Failed login error check', () => {

    beforeEach(() => {
      cy.exec('echo Je moeder start de test');
    });

    failLogIn();
    checkError();
    checkFourZeroOne();

  })

}