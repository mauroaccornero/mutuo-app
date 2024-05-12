import moment from "moment";
import { calculateInstallment } from "./calculateInstallment";
import { calculateInstallmentInterest } from "./calculateInstallmentInterest";
import { INormalizedData } from "@/common/types";

export const calculateAmortizationSchedule = ({
  interestRate,
  capital,
  duration,
  startDate,
  repayments,
}: INormalizedData) => {
  const amortizationSchedule = [];
  let installment = calculateInstallment(capital, interestRate, duration);
  for (let m = 0; m < duration; m += 1) {
    const month = m + 1;
    const repayment =
      typeof repayments[month] !== "undefined" ? repayments[month].amount : 0;
    let repaymentSaving = 0;
    let diffRata = installment;
    const cp: number = amortizationSchedule[m - 1]
      ? amortizationSchedule[m - 1].residualDebt
      : capital;
    if (repayment !== 0) {
      installment = calculateInstallment(
        cp - repayment,
        interestRate,
        duration - month + 1,
      );
      diffRata -= installment;
      repaymentSaving = (duration - month + 1) * diffRata - repayment;
    }

    const interestsQuote = calculateInstallmentInterest(
      cp - repayment,
      interestRate,
    );
    const capitalQuote = installment - interestsQuote;
    const paidUpCapital: number =
      (amortizationSchedule[m - 1]
        ? amortizationSchedule[m - 1].paidUpCapital
        : 0) +
      (capitalQuote + repayment);
    const residualDebt = cp - (capitalQuote + repayment);
    const paidUpInterests: number =
      (amortizationSchedule[m - 1]
        ? amortizationSchedule[m - 1].paidUpInterests
        : 0) + interestsQuote;
    const date = moment(startDate, "MM/YYYY").add(m, "month").format("MM/YYYY");

    amortizationSchedule[m] = {
      month,
      date,
      installment,
      interestsQuote,
      capitalQuote,
      paidUpCapital,
      residualDebt,
      paidUpInterests,
      repayment,
      repaymentSaving,
    };
  }

  return amortizationSchedule;
};
