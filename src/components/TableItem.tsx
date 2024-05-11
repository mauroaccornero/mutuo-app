"use client";

import { IAmortizationScheduleItem } from "../common/types";

type TableItemProps = {
  item: IAmortizationScheduleItem;
};

export const TableItem = ({ item }: TableItemProps) => {
  return (
    <tr key={item.date}>
      <td>{item.date}</td>
      <td className={"hide-on-mobile"}>{item.interestsQuote.toFixed(2)} €</td>
      <td className={"hide-on-mobile"}>{item.capitalQuote.toFixed(2)} €</td>
      <td>{item.installment.toFixed(2)} €</td>
      <td>{item.paidUpCapital.toFixed(2)} €</td>
      <td>{item.residualDebt.toFixed(2)} €</td>
      <td>{item.paidUpInterests.toFixed(2)} €</td>
    </tr>
  );
};
