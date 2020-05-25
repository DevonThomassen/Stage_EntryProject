/// <reference types="cypress" />

import { logIn } from "../classes/auth/logIn.spec";
import { logOut } from "../classes/auth/logOut.spec";
import { failedLogIn } from './authentication/failedLogIn.spec';

import { pagination } from "../classes/dashboard/pagination/pagination.spec";
import { addUser } from "../classes/dashboard/users/addUsers.spec";
import { editUser } from "../classes/dashboard/users/editUser.spec";
import { deleteUser } from "../classes/dashboard/users/deleteUsers.spec";

describe('Main test', () => {

  beforeEach(() => {
    cy.exec('echo Je moeder start de test');
  });

  // failedLogIn();

  logIn();

  // pagination();

  describe('User managment', () => {

    // addUser();
    editUser();
    // deleteUser();

  });

  logOut();

})