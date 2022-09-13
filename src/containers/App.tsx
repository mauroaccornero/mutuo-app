import React, { useState, useEffect } from 'react';
import moment from 'moment';
/* components */
import { Table } from '../components/Table';
import { Message } from '../components/Message';
import { Box } from '../components/Box';
import { FormMutuo } from '../components/FormMutuo';
/* css */
import '../assets/css/app.scss';
/* core */
import { ammortamento } from '../core/Financial';
import { FormEstinzione } from '../components/FormEstinzione';
import { Estinzioni } from '../components/Estinzioni';
import { Logo } from '../components/Logo';

const normalizeData = ({ capitale, tasso, durata, inizio, estinzioni }) => {
    if (tasso === '' || capitale === '' || durata === '' || tasso > 50) {
        return null;
    }

    const normalizedEstinzioni = estinzioni.map((e) => {
        if (typeof e !== 'undefined') {
            return {
                ...e,
                importo: parseFloat(e.importo.replace(',', '.')),
            };
        }
        return e;
    });

    return {
        tasso: parseFloat(tasso.replace(',', '.')),
        capitale: parseFloat(capitale.replace(',', '.')),
        durata: parseInt(durata),
        estinzioni: normalizedEstinzioni,
        inizio: inizio,
    };
};

/* TODO: TRANSLATE IN ENGLISH*/
const App = () => {
    const [items, setItems] = useState([]);
    const today = moment();
    const [data, setData] = useState({
        tasso: '',
        durata: '',
        capitale: '',
        inizio: today.format('MM/YYYY'),
        estinzioni: [],
    });

    useEffect(() => {
        const normalizedData = normalizeData(data);
        if (normalizedData) {
            const ammortamentoItems = ammortamento(normalizedData);
            setItems(ammortamentoItems);
        }
    }, [data]);

    const handleChange = (e) => {
        const { value, name, validity } = e.target;
        if (validity.valid) {
            setData({ ...data, [name]: value });
        }
    };

    const addEstinzione = (estinzione) => {
        const { mese, importo, date } = estinzione;
        const updatedEstinzioni = [...data.estinzioni];
        updatedEstinzioni[mese] = { importo, date };
        setData({ ...data, estinzioni: updatedEstinzioni });
    };

    const removeEstinzione = (month) => {
        const updatedEstinzioni = [...data.estinzioni];
        updatedEstinzioni.splice(month, 1);
        setData({ ...data, estinzioni: updatedEstinzioni });
    };

    return (
        <div id='app-container' data-testid={'mutuo-app'}>
            <div className='row'>
                <div className='column'>
                    <Logo />
                </div>
                <div className='column'>
                    <div id='head-wrapper' className='box'>
                        {items.length === 0 ? <Message /> : <Box items={items} key='box' />}
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='column'>
                    <FormMutuo handleChange={handleChange} {...data} />
                    {items.length > 0 && (
                        <FormEstinzione items={items} addEstinzione={addEstinzione} />
                    )}
                    {items.filter((e) => e.estinzione > 0).length > 0 && (
                        <Estinzioni items={items} removeEstinzione={removeEstinzione} />
                    )}
                </div>
                <div className='column'>
                    {items.length > 0 && <Table items={items} key='table' />}
                    {/* TODO: ADD SOME SPONSOR SPACE */}
                </div>
            </div>
        </div>
    );
};

export default App;
