import React from "react";
import { useRecoilValue } from "recoil";
import { transactionState } from "../atoms/Transaction";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const transaction = useRecoilValue(transactionState);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transaction.map((trans) => (
          <Transaction
            key={trans.id}
            text_val={trans.text_val}
            value={trans.value}
            id={trans.id}
          />
        ))}
      </ul>
    </>
  );
};
