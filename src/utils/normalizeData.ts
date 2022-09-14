import { IData, INormalizedData } from '../common/types';

export const normalizeData = ({
    capital,
    interestRate,
    duration,
    startDate,
    repayments,
}: IData): INormalizedData => {
    if (
        interestRate === '' ||
        capital === '' ||
        duration === '' ||
        parseFloat(capital.replace(',', '.')) <= 0 ||
        parseFloat(interestRate.replace(',', '.')) <= 0
    ) {
        return null;
    }

    const normalizedRepayments = repayments.map((e) => {
        if (e) {
            return {
                ...e,
                amount: parseFloat(e.amount.replace(',', '.')),
                month: parseInt(e.month),
            };
        }
    });

    return {
        interestRate: parseFloat(interestRate.replace(',', '.')),
        capital: parseFloat(capital.replace(',', '.')),
        duration: parseInt(duration),
        startDate: startDate,
        repayments: normalizedRepayments,
    };
};
