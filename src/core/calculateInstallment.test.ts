import { expect, it, describe } from "vitest";
import { calculateInstallment } from "./calculateInstallment";

describe("calculateInstallment() unit test", () => {
  it("should return the correct installment", () => {
    const capital = 90000;
    const interestRate = 1.85;
    const duration = 300;
    expect(calculateInstallment(capital, interestRate, duration)).toBe(
      374.9308042253166,
    );
  });
});
