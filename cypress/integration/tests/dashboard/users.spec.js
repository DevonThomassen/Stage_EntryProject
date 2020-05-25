/// <reference types="cypress" />

import { logIn } from "../../classes/auth/logIn.spec";

describe('Users', () => {

  beforeEach(() => {
    cy.exec('echo Je moeder start de test');
  });

  logIn();


})