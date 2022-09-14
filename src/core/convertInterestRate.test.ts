import { convertInterestRate } from './convertInterestRate';

describe('calculateInstallmentInterest() unit test', () => {
    it('should convert 3% to 0.0025%', () => {
        expect(convertInterestRate(3)).toBe(0.0025);
    });
});
