import React from "react";
import { useSetRecoilState } from "recoil";
import { transactionState } from "../atoms/Transaction";

export const Transaction = ({ value, id, text_val }) => {
  const sign = value < 0 ? "-" : "+";
  const setTransaction = useSetRecoilState(transactionState);

  function deleteTrans() {
    setTransaction(
      (prevTransactions) => prevTransactions.filter((t) => t.id !== id) // Correct filter function
    );
  }

  return (
    <li className={value < 0 ? "minus" : "plus"}>
      {text_val}{" "}
      <span>
        {sign}${Math.abs(value)}
      </span>
      <button className="delete-btn" onClick={deleteTrans}>
        x
      </button>
    </li>
  );
};
