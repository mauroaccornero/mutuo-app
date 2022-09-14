import { convertInterestRate } from './convertInterestRate';

export const calculateInstallmentInterest = (capital, interestRate) =>
    capital * convertInterestRate(interestRate);
