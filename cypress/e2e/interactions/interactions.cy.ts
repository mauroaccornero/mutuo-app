describe("mortgage calculator interaction tests", () => {
  const YEARS = 20;
  const CAPITAL = 100000;
  const DATE = new Date();

  beforeEach(() => {
    cy.visit("");
    cy.get("[data-cy='capital-field'] input").type(CAPITAL + "");
    cy.get("[data-cy='interest-rate-field'] input").type("2");
    cy.get("[data-cy='duration-field'] select").select(YEARS + " years");
  });

  it("should display the amortization schedule after filling the form", () => {
    const month = DATE.getMonth() + 1;
    const formattedMonth = month < 10 ? 0 + "" + month : month;
    const previousFormattedMonth =
      month < 10 ? 0 + "" + (month - 1) : month - 1;
    const year = DATE.getFullYear();
    const expectedDate = formattedMonth + "/" + year;

    const lastExpectedDate = previousFormattedMonth + "/" + (year + YEARS);
    cy.get("[data-cy='feedback-box']").as("feedbackBox");

    cy.get("@feedbackBox")
      .should("contain.text", CAPITAL + ".00 €")
      .should("contain.text", YEARS * 12 + " months");

    cy.get("[data-cy='table-row']:first-child")
      .find("[data-cy='date-cell']")
      .should("have.text", expectedDate);

    cy.get("[data-cy='table-row']:last-child").as("lastRow");

    cy.get("@lastRow")
      .find("[data-cy='date-cell']")
      .should("have.text", lastExpectedDate);

    cy.get("@lastRow")
      .find("[data-cy='residualDebt-cell']")
      .should("have.text", "0.00 €");

    cy.get("@lastRow")
      .find("[data-cy='paidUpCapital-cell']")
      .should("have.text", CAPITAL + ".00 €");

    cy.get("[data-cy='table-row']").should("have.length", YEARS * 12);
  });

  it("should display repayment form and data", () => {
    cy.get("[data-cy='repayment-amount-field'] label").should(
      "have.text",
      "Amount",
    );

    cy.get("[data-cy='repayment-amount-field'] input").as(
      "repaymentAmountField",
    );

    cy.get("@repaymentAmountField")
      .should("have.value", "")
      .should("have.attr", "placeholder", "Insert a repayment amount");

    cy.get("[data-cy='repayment-month-field'] label").should(
      "have.text",
      "Month",
    );

    cy.get("[data-cy='repayment-month-field'] select").should("have.value", 0);

    cy.get("[data-cy='repayment-month-field'] select option:selected").should(
      "have.text",
      "Choose a month",
    );

    const month = DATE.getMonth() + 1;
    const nextFormattedMonth = month < 10 ? 0 + "" + (month + 2) : month + 2;
    const year = DATE.getFullYear();
    const formattedMonth = month < 10 ? 0 + "" + month : month;
    const previousFormattedMonth =
      month < 10 ? 0 + "" + (month - 1) : month - 1;
    const expectedDate = formattedMonth + "/" + year;

    const lastExpectedDate = previousFormattedMonth + "/" + (year + YEARS);

    cy.get("@repaymentAmountField").type("10000");

    cy.get("[data-cy='repayment-month-field'] select").select(12);

    cy.get("[data-cy='repayment-button']").click();

    cy.get("[data-cy='table-row']:first-child")
      .find("[data-cy='date-cell']")
      .should("have.text", expectedDate);

    cy.get("[data-cy='table-row']:last-child").as("lastRow");
    cy.get("[data-cy='table-row']").eq(12).as("repaymentRow");

    cy.get("@lastRow")
      .find("[data-cy='date-cell']")
      .should("have.text", lastExpectedDate);

    cy.get("@lastRow")
      .find("[data-cy='residualDebt-cell']")
      .should("have.text", "0.00 €");

    cy.get("@lastRow")
      .find("[data-cy='paidUpCapital-cell']")
      .should("have.text", CAPITAL + ".00 €");

    cy.get("[data-cy='table-row']").should("have.length", YEARS * 12);

    cy.get("[data-cy='table-row']:first-child")
      .find("[data-cy='installment-cell']")
      .should("have.text", "505.88 €");

    cy.get("@repaymentRow")
      .find("[data-cy='installment-cell']")
      .should("have.text", "453.32 €");

    cy.get("@lastRow")
      .find("[data-cy='installment-cell']")
      .should("have.text", "453.32 €");
  });
});
