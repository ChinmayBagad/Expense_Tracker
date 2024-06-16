import React from "react";
import { useRecoilValue } from "recoil";
import { transactionState } from "../atoms/Transaction";

export const Balance = () => {
  const value1 = useRecoilValue(transactionState);
  const amount = value1.map((trans) => trans.value);

  const sum = amount.map(Number).reduce((add, curr) => (add += curr), 0);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${sum}</h1>
    </>
  );
};
