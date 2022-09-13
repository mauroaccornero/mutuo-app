import App from '../containers/App';
import { render, screen } from '@testing-library/react';

it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByTestId('mutuo-app')).toBeVisible();
});
