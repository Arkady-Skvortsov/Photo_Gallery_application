// <reference types="cypress" />

describe("My first e2e testing!", () => {
  it("Open my main page", () => {
    cy.visit("http://localhost:4200/");
  });

  it("2 === 2", () => {
    //cy.get(".input-txt").contains("Отгадать");
    expect(2).to.equal(2);
  });

  it("Нажатие на ссылку и перенаправление на другой компонент", () => {
    cy.get(".previous-page").click();

    cy.url().should("include", "http://localhost:4200/");
  });

  describe("HTML testing", () => {
    cy.get(".clear-input").contains(".times");
  });
});
