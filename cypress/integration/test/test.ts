/// <reference types="cypress" />

describe("first block", () => {
  it("first block", () => {
    cy.visit(Cypress.env("baseUrl"));
    cy.wait(2000);
    cy.get("h1").should("be.visible");
    cy.get("h1").should("have.text", "ReactFood");
    cy.get(".article").should("have.length", 20);
    cy.get(".control").type("margherita");
    cy.get(".article")
      .first()
      .find("h3")
      .then(($element) => {
        if ($element.text().includes("Margherita")) {
          cy.get(".article .meal-item-actions").first().find("button").click();
        }
      });
    cy.get("#main-header > :nth-child(2) > :nth-child(2)").then(($element) => {
      
      if ($element.text().includes("1")) {
        cy.wrap($element).click();
      }
    });
    cy.get('dialog').should('be.visible');
  });
});
