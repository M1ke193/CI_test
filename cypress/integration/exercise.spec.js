/// <reference types="cypress" />

describe("Exercise", () => {
  it.only("loads", () => {
    cy.visit("/sd");
    cy.get(".App-link").should("be.visible");
  });

  it("link goes to ultimateqa", () => {
    /** Your code below */
    // 1. Use cy.visit('/') to go to the app url
    // 2. cy.get('').should('have.attr', 'href').and('include', 'ultimateqa.com')
    /** Your code above */
  });

  it("should open link in new tab", () => {
    /** Your code below */
    // 1. Cmon, you know how to open the url now :)
    // 2. cy.get('').should('have.attr', 'WHAT').and('include', 'WHAT VALUE')
    /** Your code above */
  });
});
