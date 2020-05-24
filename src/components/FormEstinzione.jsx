import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
/**/
import {Input} from "./Input";


export const FormEstinzione = ({items, addEstinzione}) => {
    const [isUpdate, setIsUpdate] = useState(false);
    const [months, setMonths] = useState([]);
    const [estinzione, setEstinzione] = useState({
        date: items[0].date,
        importo: "",
        mese: 1
    });

    useEffect(() => {
        const monthsWithEstinzione = items
            .filter(i => i.estinzione > 0)
            .map(i => i.mese.toString())
        setIsUpdate(monthsWithEstinzione.includes(estinzione.mese.toString()))
    }, [estinzione,items]);

    useEffect(() => {
        const m = items.map(i => ({date: i.date, mese: i.mese}))
        setMonths(m)
    },[items])


    const handleChange = e => {
        const {value, name, validity } = e.target
        if (validity.valid) {
            setEstinzione({...estinzione, [name]: value})
        }
    }

    const handleSubmit = e => {
        addEstinzione(estinzione)
        e.preventDefault()
    }

    return (
        <div id="form-estinzione" className='box box-orange'>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="input-wrapper">
                    <label htmlFor="input-tasso">Importo</label>
                    <div className="input-container">
                        <Input
                            placeholder='Inserisci il importo'
                            name='importo'
                            onChange={e => handleChange(e)}
                            value={estinzione.importo}
                        /><span>€</span>
                    </div>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="input-inizio">Mese</label>
                    <select
                        name='mese'
                        onChange={e => handleChange(e)}
                        value={estinzione.mese}
                    >
                        <option key={`option-month-0`} value={0}>Scegli un mese</option>
                        {months.map(month => {
                            return (<option key={`option-month-${month.date}`} value={month.mese}>{month.date}</option>);
                        })}
                    </select>
                </div>

                <div className="input-wrapper">
                    <input type="submit" value={`${isUpdate ? "Aggiorna" : "Aggiungi"} estinzione`}/>
                </div>
            </form>
        </div>
    );
};

FormEstinzione.propTypes = {
    addEstinzione: PropTypes.func.isRequired,
};
