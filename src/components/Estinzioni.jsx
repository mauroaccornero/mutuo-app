import React from 'react';
import PropTypes from 'prop-types';

export const Estinzioni = ({items, removeEstinzione}) => {
    const estinzioni = items.filter(i => i.estinzione > 0);
    const totaleEstinzioni = estinzioni.reduce((acc, item) => acc + item.estinzione, 0);
    const totaleRisparmio = estinzioni.reduce((acc, item) => acc + item.risparmioEstinzione, 0);
    return (
        <div id="box-estinzioni" className="box box-orange">
            <ul>
                {estinzioni.map(e => {
                    return <li key={`estinzione-${e.mese}`}>
                        <span>Estinzione di <strong>{e.estinzione.toFixed(2)} €</strong> del <strong>{e.date}</strong> con <strong>{e.risparmioEstinzione.toFixed(2)} €</strong> interessi risparmiati.</span>
                        <button onClick={() => removeEstinzione(e.mese)}>x</button>
                    </li>;
                })}
            </ul>

            <div id="total-estinzioni">
                <div className="total-estinzione">
                    <div>Totale estinzioni</div>
                    <div>{totaleEstinzioni.toFixed(2)} €</div>
                </div>
                <div className="total-estinzione">
                    <div>Totale risparmio</div>
                    <div>{totaleRisparmio.toFixed(2)} €</div>
                </div>
                <div className="total-estinzione">
                    <div>Percentuale</div>
                    <div>{(totaleRisparmio / totaleEstinzioni * 100).toFixed(2)} %</div>
                </div>
            </div>
        </div>
    );
};

Estinzioni.propTypes = {
    items: PropTypes.arrayOf(PropTypes.any),
};
