import React from "react";
import { useRecoilValue } from "recoil";
import { transactionState } from "../atoms/Transaction";

export const IncomeExpense = () => {
  const value1 = useRecoilValue(transactionState);
  const amount = value1.map((trans) => trans.value);

  const plus = amount
    .map(Number)
    .filter((num) => num > 0)
    .reduce((sum, num) => (sum += num), 0);

  const minus = amount
    .map(Number)
    .filter((num) => num < 0)
    .reduce((sum, num) => (sum += num), 0);
  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${plus}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${Math.abs(minus)}</p>
        </div>
      </div>
    </>
  );
};
