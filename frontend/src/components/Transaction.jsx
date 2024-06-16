import React from "react";
import { useSetRecoilState } from "recoil";
import { transactionState } from "../atoms/Transaction";

export const Transaction = ({ trans }) => {
  const sign = trans.amount < 0 ? "-" : "+";
  const setTransaction = useSetRecoilState(transactionState);

  function deleteTrans() {
    setTransaction(
      (prevTransactions) => prevTransactions.filter((t) => t.id !== trans.id) // Correct filter function
    );
  }

  return (
    <li className={trans.amount < 0 ? "minus" : "plus"}>
      {trans.text}{" "}
      <span>
        {sign}${Math.abs(trans.amount)}
      </span>
      <button className="delete-btn" onClick={deleteTrans}>
        x
      </button>
    </li>
  );
};
