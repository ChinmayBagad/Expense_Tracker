import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import "./App.css";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </RecoilRoot>
  );
}

export default App;
