import { useState, useEffect, useContext } from 'react';
/**/
import { Input } from './Input';
import { AppContext } from '../context/AppContext';

export const RepaymentForm = () => {
    const { items, addRepayment } = useContext(AppContext);
    const [isUpdate, setIsUpdate] = useState(false);
    const [monthsOptions, setMonthsOptions] = useState([]);
    const [repayment, setRepayment] = useState({
        date: items.length > 0 ? items[0].date : '',
        amount: '',
        month: items.length > 0 ? items[0].month.toString() : '',
    });

    useEffect(() => {
        const monthsWithRepayment = items
            .filter((i) => i.repayment > 0)
            .map((i) => i.month.toString());
        setIsUpdate(monthsWithRepayment.includes(repayment.month));
    }, [repayment, items]);

    useEffect(() => {
        const m = items.map((item) => ({ date: item.date, month: item.month }));
        setMonthsOptions(m);
    }, [items]);

    const handleChange = (e) => {
        const { value, name, validity } = e.target;
        if (validity.valid) {
            setRepayment({ ...repayment, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        addRepayment(repayment);
        e.preventDefault();
    };

    return (
        <>
            {items.length > 0 && (
                <div id='form-estinzione' className='box box-orange'>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className='input-wrapper'>
                            <label htmlFor='input-tasso'>Amount</label>
                            <div className='input-container'>
                                <Input
                                    placeholder='Insert a repayment amount'
                                    name='amount'
                                    data-testid={'amount-input'}
                                    onChange={(e) => handleChange(e)}
                                    value={repayment.amount}
                                    required
                                />
                                <span>€</span>
                            </div>
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor='input-inizio'>Month</label>
                            <select
                                required
                                name='month'
                                data-testid={'month-input'}
                                onChange={(e) => handleChange(e)}
                                value={repayment.month}
                            >
                                <option key={'option-month-0'} value={0}>
                                    Choose a month
                                </option>
                                {monthsOptions.map((option) => {
                                    return (
                                        <option
                                            key={`option-month-${option.date}`}
                                            value={option.month}
                                        >
                                            {option.date}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>

                        <div className='input-wrapper'>
                            <input
                                type='submit'
                                data-testid={'submit-repayment-input'}
                                value={`${isUpdate ? 'Update' : 'Add'} repayment`}
                            />
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};
