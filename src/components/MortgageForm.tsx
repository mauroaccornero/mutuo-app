import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { MORTGAGE_DURATIONS } from '../defines/mortgageDurations';
import { calculateMonthsOptions } from '../utils/calculateMonthsOptions';
import { Input } from './Input';

export const MortgageForm = () => {
    const selectData = MORTGAGE_DURATIONS;
    const { handleChange, data } = useContext(AppContext);
    const { interestRate, capital, duration, startDate } = data;
    const months = calculateMonthsOptions();
    return (
        <div className='box box-orange'>
            <form>
                <div className='input-wrapper'>
                    {/* TODO: SOME TOOLTIP*/}
                    <label htmlFor='input-capitale'>Capital</label>
                    <div className='input-container'>
                        <Input
                            placeholder='Insert your mortgage capital'
                            name='capital'
                            data-testid={'capital-input'}
                            value={capital}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <span>€</span>
                    </div>
                </div>
                <div className='input-wrapper'>
                    <label htmlFor='input-tasso'>Interest rate</label>
                    <div className='input-container'>
                        <Input
                            placeholder='Insert your mortgage interest rate'
                            name='interestRate'
                            data-testid={'interestRate-input'}
                            value={interestRate}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <span>%</span>
                    </div>
                </div>
                <div className='input-wrapper'>
                    <label htmlFor='input-durata'>Duration</label>
                    <div className='input-container'>
                        <select
                            required
                            data-testid={'duration-select'}
                            name='duration'
                            onChange={(e) => handleChange(e)}
                            value={duration}
                        >
                            <option key={'option-duration-0'} value={0}>
                                Choose a duration
                            </option>
                            {Object.entries(selectData).map(([, { months, year }]) => {
                                return (
                                    <option key={`option-duration-${months}`} value={months}>
                                        {year} years
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <div className='input-wrapper'>
                    <label htmlFor='input-inizio'>Start date</label>
                    <div className='input-container'>
                        <select
                            name='startDate'
                            onChange={(e) => handleChange(e)}
                            value={startDate}
                            data-testid={'startDate-select'}
                            required
                        >
                            <option key={'option-month-0'} value={0}>
                                Choose a start date
                            </option>
                            {months.map((month) => {
                                return (
                                    <option key={`option-month-${month}`} value={month}>
                                        {month}{' '}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
            </form>
        </div>
    );
};
