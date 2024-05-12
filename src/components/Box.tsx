import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

export const Box = () => {
  const { items } = useContext(AppContext);
  const lastItem = items.slice(-1).pop();
  if (lastItem) {
    const { month, paidUpInterests, paidUpCapital } = lastItem;
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
      <div id="boxes-container" className="message" data-cy="feedback-box">
        <div>
          On a <strong>paid-up capital of {paidUpCapital.toFixed(2)} €</strong>{" "}
          you will pay{" "}
          <strong>{paidUpInterests.toFixed(2)} € of interests</strong> in{" "}
          <strong>{month} months</strong>. <br />
          Total amount of interests is{" "}
          <strong>
            {((paidUpInterests / paidUpCapital) * 100).toFixed(2)}% of capital
          </strong>
          .{" "}
          {repayments.length === 0 ? (
            <>No repayments were applied.</>
          ) : (
            <>
              With {repayments.length} repayment{repayments.length > 1 && "s"},
              for a total amount of{" "}
              <strong>{totalRepayments.toFixed(2)} €</strong>,{" "}
              <strong>
                you can save {totalSavings.toFixed(2)} € on interests
              </strong>
              .{" "}
            </>
          )}
          <br />
          Try to update your repayments to see how much you can save.
        </div>
      </div>
    );
  } else {
    return null;
  }
};
