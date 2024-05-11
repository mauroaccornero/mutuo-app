"use client";

import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { TableItem } from "./TableItem";

export const Table = () => {
  const { items } = useContext(AppContext);
  return (
    <table>
      <thead>
        <tr>
          <th>Month</th>
          <th className={"hide-on-mobile"}>Interests quote</th>
          <th className={"hide-on-mobile"}>Capital quote</th>
          <th>Installment</th>
          <th>Paid-up capital</th>
          <th>Residual debt</th>
          <th>Paid-up interests</th>
        </tr>
      </thead>
      <tbody>
        {items.length > 0 ? (
          items.map((item, i) => <TableItem key={i} item={item} />)
        ) : (
          <tr className="empty-table">
            <td colSpan={6}>Fill the form to see the amortization schedule</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
