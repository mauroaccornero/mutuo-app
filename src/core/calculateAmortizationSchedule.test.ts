import moment from 'moment/moment';
import { calculateAmortizationSchedule } from './calculateAmortizationSchedule';

describe('calculateAmortizationSchedule() unit test', () => {
    it('should give the correct amortization schedule', () => {
        const capital = 100;
        const interestRate = 1;
        const duration = 2;
        const startDate = moment().format('MM/YYYY');
        const repayments = [];

        const expectedAmortization = [
            {
                paidUpCapital: 49.979175343611836,
                date: moment(startDate, 'MM/YYYY').add(0, 'month').format('MM/YYYY'),
                residualDebt: 50.020824656388164,
                repayment: 0,
                paidUpInterests: 0.08333333333333334,
                month: 1,
                capitalQuote: 49.979175343611836,
                interestsQuote: 0.08333333333333334,
                installment: 50.06250867694517,
                repaymentSaving: 0,
            },
            {
                paidUpCapital: 100.00000000001002,
                date: moment(startDate, 'MM/YYYY').add(1, 'month').format('MM/YYYY'),
                residualDebt: -1.0018652574217413e-11,
                repayment: 0,
                paidUpInterests: 0.12501735388032348,
                month: 2,
                capitalQuote: 50.02082465639818,
                interestsQuote: 0.04168402054699014,
                installment: 50.06250867694517,
                repaymentSaving: 0,
            },
        ];

        expect(
            calculateAmortizationSchedule({
                interestRate,
                capital,
                duration,
                startDate,
                repayments,
            })
        ).toEqual(expectedAmortization);
    });
});
