import { IData } from "../common/types";

export const normalizeData = ({
  capital,
  interestRate,
  duration,
  startDate,
  repayments,
}: IData) => {
  if (
    interestRate === "" ||
    capital === "" ||
    duration === "" ||
    parseFloat(capital.replace(",", ".")) <= 0 ||
    parseFloat(interestRate.replace(",", ".")) <= 0
  ) {
    return null;
  }

  const normalizedRepayments = repayments.map((repayment) => {
    if (repayment) {
      return {
        ...repayment,
        amount: parseFloat(repayment.amount.replace(",", ".")),
        month: parseInt(repayment.month),
      };
    }
    return repayment;
  });

  return {
    interestRate: parseFloat(interestRate.replace(",", ".")),
    capital: parseFloat(capital.replace(",", ".")),
    duration: parseInt(duration),
    startDate: startDate,
    repayments: normalizedRepayments,
  };
};
