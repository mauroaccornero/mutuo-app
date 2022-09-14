import { calculateInstallmentInterest } from './calculateInstallmentInterest';

describe('calculateInstallmentInterest() unit test', () => {
    it('should return the correct interest rate', () => {
        const capital = 90000;
        const interestRate = 1.85;
        expect(calculateInstallmentInterest(capital, interestRate)).toEqual(138.75000000000003);
    });
});
