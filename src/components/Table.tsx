import React from 'react';
import PropTypes from 'prop-types';
/**/
import { TableItem } from './TableItem';

export const Table = ({ items }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Mese</th>
                    <th className={'hide-on-mobile'}>Quota Interessi</th>
                    <th className={'hide-on-mobile'}>Quota Capitale</th>
                    <th>Rata</th>
                    <th>Capitale Versato</th>
                    <th>Debito Residuo</th>
                    <th>Interessi Versati</th>
                </tr>
            </thead>
            <tbody>
                {items.length > 0 ? (
                    items.map((item, i) => <TableItem key={i} item={item} />)
                ) : (
                    <tr className='empty-table'>
                        <td colSpan={6}>
                            Compila il form per visualizzare il piano di ammortamento
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

Table.propTypes = {
    items: PropTypes.arrayOf(PropTypes.any).isRequired,
};
