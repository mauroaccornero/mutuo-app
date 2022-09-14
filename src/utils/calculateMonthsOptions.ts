import moment from 'moment';

export const calculateMonthsOptions = () => {
    const today = moment();
    const months = [today.format('MM/YYYY')];
    for (let m = 0; m < 13; m++) {
        const currMonth = today.add(1, 'month');
        months.push(currMonth.format('MM/YYYY'));
    }
    return months;
};
