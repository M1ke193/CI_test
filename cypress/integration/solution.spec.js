/// <reference types="cypress" />

describe("Solution", () => {
  it("loads", () => {
    cy.visit("/");
    cy.get(".App-link").should("be.visible");
  });

  it("link goes to react.dev", () => {
    cy.visit("/");
    cy.get(".App-link").should("have.attr", "href").and("include", "react.dev");
  });

  it("should open link in new tab", () => {
    cy.visit("/");
    cy.get(".App-link").should("have.attr", "target").and("include", "_blank");
  });
});
