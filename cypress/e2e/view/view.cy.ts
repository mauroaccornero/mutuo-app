describe("mortgage calculator visibility and content tests", () => {
  const DATE = new Date();

  beforeEach(() => {
    cy.visit("");
  });

  it("should display a logo with the correct text", () => {
    cy.get("#logo h1").should("have.text", "Mortgage App");
    cy.get("#logo h2").should("have.text", "Save on your mortgage");
    cy.get("[data-cy='message-box']").should(
      "have.text",
      "Fill the form with capital, interest rate and duration to see the amortization schedule. By adding repayments, you can save money on interests!",
    );
    cy.get("[data-cy='empty-form-message']").should(
      "have.text",
      "Fill the form to see the amortization schedule",
    );
  });

  it("should display a form with correct fields", () => {
    cy.get("[data-cy='capital-field'] label").should("have.text", "Capital");

    cy.get("[data-cy='capital-field'] input").as("capitalField");

    cy.get("@capitalField")
      .should("have.value", "")
      .should("have.attr", "placeholder", "Insert your mortgage capital");

    cy.get("[data-cy='interest-rate-field'] input").as("interestRateField");

    cy.get("[data-cy='interest-rate-field'] label").should(
      "have.text",
      "Interest rate",
    );
    cy.get("@interestRateField")
      .should("have.value", "")
      .should("have.attr", "placeholder", "Insert your mortgage interest rate");

    cy.get("[data-cy='duration-field'] label").should("have.text", "Duration");
    cy.get("[data-cy='duration-field'] select").should("have.value", "0");
    cy.get("[data-cy='duration-field'] select option:selected").should(
      "have.text",
      "Choose a duration",
    );

    cy.get("[data-cy='start-date-field'] label").should(
      "have.text",
      "Start date",
    );

    const month = DATE.getMonth() + 1;
    const formattedMonth = month < 10 ? 0 + "" + month : month;
    const year = DATE.getFullYear();
    const expectedDate = formattedMonth + "/" + year;
    cy.get("[data-cy='start-date-field'] select").should(
      "have.value",
      expectedDate,
    );
    cy.get("[data-cy='start-date-field'] select option:selected").should(
      "contain.text",
      expectedDate,
    );
  });
});
