import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';
import moment from 'moment';
/**/
import { IAmortizationScheduleItem, IData, IRepayment } from '../common/types';
import { normalizeData } from '../utils/normalizeData';
import { calculateAmortizationSchedule } from '../core/calculateAmortizationSchedule';
import { setAmortizationSchedule } from '../store/amortizationScheduleSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const defaultValue = {
    data: {
        interestRate: '',
        duration: '',
        capital: '',
        startDate: moment().format('MM/YYYY'),
        repayments: [],
    },
    setData: () => {
        /* do nothing.*/
    },
    handleChange: () => {
        /* do nothing.*/
    },
    addRepayment: () => {
        /* do nothing.*/
    },
    removeRepayment: () => {
        /* do nothing.*/
    },
    items: [],
};

interface IAppContextInterface {
    data: IData;
    setData(data: IData): void;
    handleChange(
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
    ): void;
    addRepayment(repayment: IRepayment): void;
    removeRepayment(month: number): void;
    items: IAmortizationScheduleItem[];
}

const AppContext = createContext<IAppContextInterface>(defaultValue);

const AppStore = ({ children, mockData }) => {
    const [data, setData] = useState(
        mockData ? { ...defaultValue.data, ...mockData.data } : defaultValue.data
    );
    const items = useAppSelector((state) => state.amortizationSchedule.value);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const normalizedData = normalizeData(data);
        if (normalizedData) {
            const amortizationItems = calculateAmortizationSchedule(normalizedData);
            dispatch(setAmortizationSchedule(amortizationItems));
        } else {
            dispatch(setAmortizationSchedule([]));
        }
    }, [data]);

    const handleChange = (e) => {
        const { value, name, validity } = e.target;
        if (validity.valid) {
            setData({ ...data, [name]: value });
        }
    };

    const addRepayment = ({ month, amount, date }) => {
        const updatedRepayments = [...data.repayments];
        updatedRepayments[parseInt(month)] = { amount, date, month };
        setData({ ...data, repayments: updatedRepayments });
    };

    const removeRepayment = (month) => {
        const updatedRepayments = [...data.repayments];
        updatedRepayments.splice(month, 1);
        setData({ ...data, repayments: updatedRepayments });
    };

    return (
        <AppContext.Provider
            value={{ data, setData, handleChange, addRepayment, removeRepayment, items }}
        >
            {children}
        </AppContext.Provider>
    );
};

AppStore.propTypes = {
    children: PropTypes.element.isRequired,
    mockData: PropTypes.shape({
        data: PropTypes.shape({
            interestRate: PropTypes.string,
            duration: PropTypes.string,
            capital: PropTypes.string,
            startDate: PropTypes.string,
            repayments: PropTypes.arrayOf(
                PropTypes.shape({
                    amount: PropTypes.string,
                    date: PropTypes.string,
                    month: PropTypes.string,
                })
            ),
        }),
        setData: PropTypes.func,
        handleChange: PropTypes.func,
        addRepayment: PropTypes.func,
        removeRepayment: PropTypes.func,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                date: PropTypes.string,
                month: PropTypes.number,
                interestsQuote: PropTypes.number,
                capitalQuote: PropTypes.number,
                installment: PropTypes.number,
                paidUpCapital: PropTypes.number,
                residualDebt: PropTypes.number,
                paidUpInterests: PropTypes.number,
            })
        ),
    }),
};

export { AppContext, AppStore };
