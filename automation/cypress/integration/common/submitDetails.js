import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('I submit an amount {string} and a price {string}', (amount, price) => {
  cy.get('.form-amount').type(amount);
  cy.get('.form-price').type(price);
  cy.get('.btn').click();
});