import { render, screen } from '../test-utils';
import { MortgageForm } from './MortgageForm';

describe('<MortgageForm /> unit test', () => {
    it('should renders fields without errors', () => {
        render(<MortgageForm />);
        expect(screen.getByTestId('startDate-select')).toBeVisible();
        expect(screen.getByTestId('duration-select')).toBeVisible();
        expect(screen.getByTestId('interestRate-input')).toBeVisible();
        expect(screen.getByTestId('capital-input')).toBeVisible();
    });
});
