import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import store from './store/store';
import { AppStore } from './context/AppContext';
import moment from 'moment/moment';

const AllTheProviders = ({ children }) => {
    const mockData = {
        data: {
            capital: '100000',
            interestRate: '2',
            duration: '10',
            startDate: moment().format('MM/YYYY'),
            repayments: [],
        },
    };
    return (
        <Provider store={store}>
            <AppStore mockData={mockData}>{children}</AppStore>
        </Provider>
    );
};

AllTheProviders.propTypes = {
    children: PropTypes.element.isRequired,
    mockData: PropTypes.any,
};

const customRender = (ui, options = {}) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
