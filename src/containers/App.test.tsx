import { render, screen } from '../test-utils';
import App from './App';

describe('<App /> unit test', () => {
    it('should renders without errors', () => {
        render(<App />);
        expect(screen.getByTestId('mortgage-app')).toBeVisible();
    });
});
