import React from 'react';

export const Message = () => {
    const message =
        "Inserisci capitale, tasso e durata per vedere l'ammortamento del tuo mutuo. Aggiungendo estinzioni parziali puoi risparmiare interessi!";
    return <div className={'empty-message message'}>{message}</div>;
};
