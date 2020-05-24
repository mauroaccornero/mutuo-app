import React from 'react';
import PropTypes from 'prop-types';
import moment from "moment";
/**/
import {Input} from "./Input";

const yearsToMonth = () => {
    let yearsToMonth = [];
    let i = 5;
    while (i < 41) {
        yearsToMonth[i] = i * 12;
        i += 5;
    }
    return yearsToMonth;
};

const makeMonths = () => {
    const today = moment();
    const months = [today.format("MM/YYYY")];
    for (let m = 0; m < 13; m++) {
        const currMonth = today.add(1, "month");
        months.push(currMonth.format("MM/YYYY"));
    }
    return months;
};

export const FormMutuo = ({handleChange, tasso, capitale, durata, inizio}) => {
    const selectData = yearsToMonth();
    const months = makeMonths();
    return (
        <div className="box box-orange">
            <form>
                <div className="input-wrapper">
                    {/*TODO: SOME TOOLTIP*/}
                    <label htmlFor="input-capitale">Capitale</label>
                    <div className="input-container">
                        <Input
                            placeholder='Inserisci il capitale'
                            name='capitale'
                            value={capitale}
                            onChange={e => handleChange(e)}
                        /><span>€</span>
                    </div>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="input-tasso">Tasso</label>
                    <div className="input-container">
                        <Input
                            placeholder='Inserisci il tasso'
                            name='tasso'
                            value={tasso}
                            onChange={e => handleChange(e)}
                        /><span>%</span>
                    </div>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="input-durata">Durata</label>
                    <div className="input-container">
                        <select
                            name='durata'
                            onChange={e => handleChange(e)}
                            value={durata}
                        >
                            <option key={`option-durata-0`} value={0}>Scegli una durata</option>
                            {selectData.map((month, year) => {
                                return (<option key={`option-durata-${month}`} value={month}>{year} anni</option>);
                            })}
                        </select>
                    </div>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="input-inizio">Inizio</label>
                    <div className="input-container">
                        <select
                            name='inizio'
                            onChange={e => handleChange(e)}
                            value={inizio}
                        >
                            <option key={`option-month-0`} value={0}>Scegli un inizio</option>
                            {months.map(month => {
                                return (<option key={`option-month-${month}`} value={month}>{month} </option>);
                            })}
                        </select>
                    </div>
                </div>
            </form>
        </div>
    );
};

FormMutuo.propTypes = {
    handleChange: PropTypes.func.isRequired,
};
