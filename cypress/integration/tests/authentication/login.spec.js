/// <reference types="cypress" />

import { logIn } from "../../classes/auth/logIn.spec";
import { logOut } from "../../classes/auth/logOut.spec";

export function logInOut() {

  describe('Authentication', () => {

    beforeEach(() => {
      cy.exec('echo Je moeder start de test');
    });

    logIn();
    logOut();

  })
}