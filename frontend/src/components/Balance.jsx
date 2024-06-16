import React from "react";
import { useRecoilValue } from "recoil";
import { transactionState } from "../atoms/Transaction";

export const Balance = () => {
  const value = useRecoilValue(transactionState);
  const amount = value.map((trans) => trans.amount);

  const sum = amount.map(Number).reduce((add, curr) => (add += curr), 0);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${sum}</h1>
    </>
  );
};
