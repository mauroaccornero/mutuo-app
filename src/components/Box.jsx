import React from 'react';
import PropTypes from 'prop-types';

export const Box = ({items}) => {
    const { mese, interessiVersati, capitaleVersato} = items.slice(-1).pop();
    const estinzioni = items.filter(i => i.estinzione > 0);
    const totaleEstinzioni = estinzioni.reduce((acc, item) => acc + item.estinzione, 0);
    const totaleRisparmio = estinzioni.reduce((acc, item) => acc + item.risparmioEstinzione, 0);
    return (
        <div id="boxes-container" className="message">
            <div>
                Su un <strong>capitale di {capitaleVersato.toFixed(2)} €</strong> vengono applicati <strong>{interessiVersati.toFixed(2)} € di interessi</strong> in <strong>{mese} mesi</strong>. <br/>
                Il totale degli interessi da pagare corrisponde al <strong>{(interessiVersati/capitaleVersato*100).toFixed(2)}% del capitale</strong>.{' '}
                { estinzioni.length === 0 ? <>Non sono state effettuate estinzioni parziali.</> : <>Con {estinzioni.length > 1 ? `${estinzioni.length} estinzioni parziali` : `${estinzioni.length} estinzione parziale`}, per un totale di <strong>{totaleEstinzioni.toFixed(2)} €</strong>, <strong>vengono risparmiati {totaleRisparmio.toFixed(2)} € di interessi</strong>. </>}<br />
                È possibile modificare le estinzioni parziali dall'apposito form in basso a destra per vedere il conseguente impatto sulle rate e sugli interessi da corrispondere.
            </div>
        </div>
    );
};

Box.propTypes = {
    items: PropTypes.arrayOf(PropTypes.any),
};
