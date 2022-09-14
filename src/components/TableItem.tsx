import PropTypes from 'prop-types';
import { IAmortizationScheduleItem } from '../common/types';

interface ITableProps {
    item: IAmortizationScheduleItem;
}

export const TableItem = ({ item }: ITableProps) => {
    return (
        <tr key={item.date}>
            <td>{item.date}</td>
            <td className={'hide-on-mobile'}>{item.interestsQuote.toFixed(2)} €</td>
            <td className={'hide-on-mobile'}>{item.capitalQuote.toFixed(2)} €</td>
            <td>{item.installment.toFixed(2)} €</td>
            <td>{item.paidUpCapital.toFixed(2)} €</td>
            <td>{item.residualDebt.toFixed(2)} €</td>
            <td>{item.paidUpInterests.toFixed(2)} €</td>
        </tr>
    );
};

TableItem.propTypes = {
    item: PropTypes.shape({
        date: PropTypes.string.isRequired,
        month: PropTypes.number.isRequired,
        interestsQuote: PropTypes.number.isRequired,
        capitalQuote: PropTypes.number.isRequired,
        installment: PropTypes.number.isRequired,
        paidUpCapital: PropTypes.number.isRequired,
        residualDebt: PropTypes.number.isRequired,
        paidUpInterests: PropTypes.number.isRequired,
    }).isRequired,
};
