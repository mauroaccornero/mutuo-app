"use client";

import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const RepaymentsBox = () => {
  const { items, removeRepayment } = useContext(AppContext);
  const repayments = items.filter((i) => i.repayment > 0);
  const totalRepayments = repayments.reduce(
    (acc, item) => acc + item.repayment,
    0,
  );
  const totalSavings = repayments.reduce(
    (acc, item) => acc + item.repaymentSaving,
    0,
  );
  return (
    <>
      {items.length > 0 && (
        <div id="box-repayments" className="box box-orange">
          <ul>
            {repayments.map((e) => {
              return (
                <li key={`repayment-${e.month}`}>
                  <span>
                    With a repayment of{" "}
                    <strong>{e.repayment.toFixed(2)} €</strong> on{" "}
                    <strong>{e.date}</strong> you save{" "}
                    <strong>{e.repaymentSaving.toFixed(2)} €</strong> on
                    interests.
                  </span>
                  <button onClick={() => removeRepayment(e.month)}>x</button>
                </li>
              );
            })}
          </ul>

          <div id="total-repayments">
            <div className="total-repayment">
              <div>Total repayments</div>
              <div>{totalRepayments.toFixed(2)} €</div>
            </div>
            <div className="total-repayment">
              <div>Total savings</div>
              <div>{totalSavings.toFixed(2)} €</div>
            </div>
            <div className="total-repayment">
              <div>Percentage</div>
              <div>
                {((totalSavings / totalRepayments) * 100 || 0).toFixed(2)} %
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
