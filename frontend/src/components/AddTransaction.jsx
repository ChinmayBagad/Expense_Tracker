import React, { useState } from "react";
import { transactionState } from "../atoms/Transaction";
import { useSetRecoilState } from "recoil";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const setTrans = useSetRecoilState(transactionState);

  function addTrans() {
    const parsedAmount = parseFloat(amount);
    event.preventDefault();
    setTrans((pre) => [
      ...pre,
      {
        id: Math.random(),
        text_val: text,
        value: parsedAmount,
      },
    ]);
    setText(""), setAmount(0);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => {
              setAmount(parseFloat(e.target.value));
            }}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" onClick={addTrans}>
          Add transaction
        </button>
      </form>
    </>
  );
};
