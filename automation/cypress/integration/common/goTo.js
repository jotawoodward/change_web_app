import { When } from 'cypress-cucumber-preprocessor/steps';

When('I go to the route page', () => {
  cy.visit('http://localhost:3000/')
});