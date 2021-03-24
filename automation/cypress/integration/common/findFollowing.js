import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('I find the following results:', (dataTable) => {
  const table = dataTable.rawTable;
  table.forEach((el) => {
    cy.get(`[alt="${el[0]}"]`)
    cy.contains(el[1])
  });
});