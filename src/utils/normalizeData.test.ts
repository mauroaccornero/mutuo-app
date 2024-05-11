import { expect, it, describe } from "vitest";
import { normalizeData } from "./normalizeData";
import moment from "moment";

describe("normalizeData() unit test", () => {
  it("should return null with invalid data", () => {
    let mockData = {
      capital: "",
      interestRate: "1.5",
      duration: "10",
      startDate: moment().format("MM/YYYY"),
      repayments: [],
    };
    expect(normalizeData(mockData)).toBe(null);
    mockData = {
      capital: "100",
      interestRate: "",
      duration: "10",
      startDate: moment().format("MM/YYYY"),
      repayments: [],
    };
    expect(normalizeData(mockData)).toBe(null);
    mockData = {
      capital: "100",
      interestRate: "1.5",
      duration: "",
      startDate: moment().format("MM/YYYY"),
      repayments: [],
    };
    expect(normalizeData(mockData)).toBe(null);
  });

  it("should convert string data to number", () => {
    const mockData = {
      capital: "100",
      interestRate: "1.5",
      duration: "10",
      startDate: moment().format("MM/YYYY"),
      repayments: [
        { month: "0", amount: "100,5", date: moment().format("MM/YYYY") },
      ],
    };
    expect(normalizeData(mockData)).toStrictEqual({
      capital: 100,
      interestRate: 1.5,
      duration: 10,
      startDate: moment().format("MM/YYYY"),
      repayments: [
        { month: 0, amount: 100.5, date: moment().format("MM/YYYY") },
      ],
    });
  });
});
