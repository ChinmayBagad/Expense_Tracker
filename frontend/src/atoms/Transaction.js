import { atom } from "recoil";

const transactionState = atom({
  key: "transactionState",
  default: [
    {
      text: "Flower",
      amount: "500",
    },
    {
      text: "Toy",
      amount: "-400",
    },
    {
      text: "Car",
      amount: "1500",
    },
  ],
});

export { transactionState };
