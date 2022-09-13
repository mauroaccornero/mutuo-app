import moment from 'moment';

export const rata = (capitale, tasso, durata) => {
    const t = convertiTasso(tasso);
    const d = Math.pow(1 + t, -durata);
    return capitale * (t / (1 - d));
};

export const convertiTasso = (tasso) => {
    return tasso / 100 / 12;
};

export const ammortamento = ({ tasso, capitale, durata, inizio, estinzioni }) => {
    const ammortamento = [];
    let r = rata(capitale, tasso, durata);
    for (let m = 0; m < durata; m += 1) {
        const mese = m + 1;
        const estinzione = typeof estinzioni[mese] !== 'undefined' ? estinzioni[mese].importo : 0;
        let risparmioEstinzione = 0;
        let diffRata = r;
        const cp = ammortamento[m - 1] ? ammortamento[m - 1].debitoResiduo : capitale;
        if (estinzione !== 0) {
            r = rata(cp - estinzione, tasso, durata - mese + 1);
            diffRata -= r;
            risparmioEstinzione = (durata - mese + 1) * diffRata - estinzione;
        }

        const quotaInteressi = interessiRata(cp - estinzione, tasso);
        const quotaCapitale = r - quotaInteressi;
        const capitaleVersato =
            (ammortamento[m - 1] ? ammortamento[m - 1].capitaleVersato : 0) +
            (quotaCapitale + estinzione);
        const debitoResiduo = cp - (quotaCapitale + estinzione);
        const interessiVersati =
            (ammortamento[m - 1] ? ammortamento[m - 1].interessiVersati : 0) + quotaInteressi;
        const date = moment(inizio, 'MM/YYYY').add(m, 'month').format('MM/YYYY');

        ammortamento[m] = {
            mese,
            date,
            rata: r,
            quotaInteressi: quotaInteressi,
            quotaCapitale: quotaCapitale,
            capitaleVersato: capitaleVersato,
            debitoResiduo: debitoResiduo,
            interessiVersati: interessiVersati,
            estinzione,
            risparmioEstinzione,
        };
    }

    return ammortamento;
};

export const interessiRata = (capitale, tasso) => {
    const t = convertiTasso(tasso);
    return capitale * t;
};
