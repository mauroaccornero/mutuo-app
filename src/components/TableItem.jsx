import React from 'react';
import PropTypes from 'prop-types';

export const TableItem = ({item}) => {

    return (
        <tr key={item.date}>
            <td>{item.date}</td>
            <td className={"hide-on-mobile"}>{item.quotaInteressi.toFixed(2)} €</td>
            <td className={"hide-on-mobile"}>{item.quotaCapitale.toFixed(2)} €</td>
            <td>{item.rata.toFixed(2)} €</td>
            <td>{item.capitaleVersato.toFixed(2)} €</td>
            <td>{item.debitoResiduo.toFixed(2)} €</td>
            <td>{item.interessiVersati.toFixed(2)} €</td>
        </tr>
    );
};

TableItem.propTypes = {
    item: PropTypes.shape({
        date: PropTypes.string.isRequired,
        mese: PropTypes.number.isRequired,
        quotaInteressi: PropTypes.number.isRequired,
        quotaCapitale: PropTypes.number.isRequired,
        rata: PropTypes.number.isRequired,
        capitaleVersato: PropTypes.number.isRequired,
        debitoResiduo: PropTypes.number.isRequired,
        interessiVersati: PropTypes.number.isRequired,
    }).isRequired,
};
