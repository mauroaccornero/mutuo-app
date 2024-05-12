"use client";

import { IAmortizationScheduleItem } from "@/common/types";

type TableItemProps = {
  item: IAmortizationScheduleItem;
};

export const TableItem = ({ item }: TableItemProps) => {
  return (
    <tr key={item.date} data-cy={"table-row"}>
      <td data-cy={"date-cell"}>{item.date}</td>
      <td data-cy={"interestsQuote-cell"} className={"hide-on-mobile"}>
        {item.interestsQuote.toFixed(2)} €
      </td>
      <td data-cy={"capitalQuote-cell"} className={"hide-on-mobile"}>
        {item.capitalQuote.toFixed(2)} €
      </td>
      <td data-cy={"installment-cell"}>{item.installment.toFixed(2)} €</td>
      <td data-cy={"paidUpCapital-cell"}>{item.paidUpCapital.toFixed(2)} €</td>
      <td data-cy={"residualDebt-cell"}>{item.residualDebt.toFixed(2)} €</td>
      <td data-cy={"paidUpInterest-cell"}>
        {item.paidUpInterests.toFixed(2)} €
      </td>
    </tr>
  );
};
