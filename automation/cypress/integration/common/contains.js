import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('I see {string}', (text) => {
  cy.contains(text);
});