/// <reference types="cypress" />

describe("test", () => {
  it("test", () => {
    cy.visit(Cypress.env("baseUrl"));
    cy.wait(2000);
    cy.get("h1").should("be.visible");
    cy.get("h1").should("have.text", "ReactFood");
    cy.get(".article").should("have.length", 20);
    cy.get(".control").type("margherita");
    cy.get(".article").first().find("h3");
  });
});
