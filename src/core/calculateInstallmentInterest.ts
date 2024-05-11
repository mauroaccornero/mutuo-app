import { convertInterestRate } from "./convertInterestRate";

export const calculateInstallmentInterest = (
  capital: number,
  interestRate: number,
) => capital * convertInterestRate(interestRate);
