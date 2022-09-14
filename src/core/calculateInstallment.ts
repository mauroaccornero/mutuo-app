import { convertInterestRate } from './convertInterestRate';

export const calculateInstallment = (capital, interestRate, duration) => {
    const t = convertInterestRate(interestRate);
    const d = Math.pow(1 + t, -duration);
    return capital * (t / (1 - d));
};
