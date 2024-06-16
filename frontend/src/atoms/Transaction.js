import { atom } from "recoil";

const transactionState = atom({
  key: "transactionState",
  default: [],
});

export { transactionState };
