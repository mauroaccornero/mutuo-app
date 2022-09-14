import { calculateMonthsOptions } from './calculateMonthsOptions';

describe('calculateMonthsOptions() unit test', () => {
    it('should output months options', () => {
        const result = calculateMonthsOptions();
        expect(result.length).toBe(14);
        result.forEach((r) => {
            expect(r.length).toBe(7);
        });
    });
});
