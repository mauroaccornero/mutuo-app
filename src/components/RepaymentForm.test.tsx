import { render, screen } from '../test-utils';
import { RepaymentForm } from './RepaymentForm';

describe('<RepaymentForm /> unit test', () => {
    it('should renders fields without errors', () => {
        render(<RepaymentForm />, {});
        expect(screen.getByTestId('submit-repayment-input')).toBeVisible();
        expect(screen.getByTestId('amount-input')).toBeVisible();
        expect(screen.getByTestId('month-input')).toBeVisible();
    });
});
